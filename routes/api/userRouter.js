const Router = require("express").Router;
const userRouter = Router();
const bcrypt = require("bcrypt");
const path = require("path");
const fsPromises = require("fs").promises;

const data = {
  users: require("../../data/users.json"),
  setUsers: function (newUsers) {
    this.users = newUsers;
  },
};

userRouter
  .get("/", (req, res) => {
    const sanitizedUsers = data.users.map((user) => {
      return {
        username: user.username,
      };
    });
    res.json(sanitizedUsers);
  })
  .post("/register", async (req, res) => {
    const { username, psw } = req.body;
    if (!username || !psw) {
      return res
        .status(404)
        .json({ message: "Username and password are required!" });
    }
    const userExists = data.users.find((user) => user.username === username);
    if (userExists) {
      return res
        .status(409)
        .json({ message: `User with username ${username} already exists!` });
    }
    try {
      const hashedPsw = await bcrypt.hash(psw, 10);
      const newUser = { username, psw: hashedPsw };
      data.setUsers([...data.users, newUser]);
      // console.log(data.users);
      await fsPromises.writeFile(
        path.join(__dirname, "..", "..", "data", "users.json"),
        JSON.stringify(data.users)
      );
    } catch (err) {
      res.status(500).json({ message: err.message });
    }

    res.status(201).json({ message: `User ${username} created.` });
  })
  .post("/login", async (req, res) => {
    const { username, psw } = req.body;
    if (!username || !psw) {
      return res
        .status(404)
        .json({ message: "Username and password are required!" });
    }
    const userExists = data.users.find((user) => user.username === username);
    if (!userExists) {
      return res
        .status(401)
        .json({ message: `Unauthorized!` });
    }
    try {
        const match = await bcrypt.compare(psw, userExists.psw);
        if (match) {
            // create JWT
            res.status(200).json({ message: `User ${username} logged in.` });
        } else {
            res.status(401).json({ message: 'Unauthorized!' });
        }
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

module.exports = userRouter;
