const path = require('path');
const Router = require('express').Router;
const apiRouter = Router();
const userRouter = require('./api/userRouter');

const data = {
    users: require('../data/users.json'),
    setUsers: function(newUsers) {
        this.users = newUsers;
    }
};

apiRouter
        .get('/', (req, res) => {
            res.send(path.resolve(__dirname, 'public', 'index.html'));
        })
        .post('/register', (req, res) => {
            const { username, psw } = req.body;
            if (!username || !psw) {
                return res.status(404).json({ message: 'Username and password are required!'});
            }
            const userExists = data.users.find(user => user.username === username);
            if (userExists) {
                return res.status(409).json({ message: `User with username ${username} already exists!` });
            }
            const newUser = { username, psw };
            data.setUsers([...data.users, newUser]);
            // console.log(data.users);
        
            res.status(201).json({ message: `User ${username} created.`});
        })
        .use('/user', userRouter);
module.exports = apiRouter;