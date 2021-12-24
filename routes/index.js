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
        .use('/user', userRouter);
module.exports = apiRouter;