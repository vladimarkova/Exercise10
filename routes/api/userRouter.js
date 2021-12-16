const Router = require('express').Router;
const userRouter = Router();

const data = {
    users: require('../../data/users.json'),
    setUsers: function(newUsers) {
        this.users = newUsers;
    }
};

userRouter.route('/')
    .get((req, res) => {
        const sanitizedUsers = data.users.map((user) => {
            return {
                username: user.username
            }})
            res.json(sanitizedUsers);
    })

module.exports = userRouter;