const Router = require('express').Router;
const apiRouter = Router();
const userRouter = require('./userRouter');

apiRouter.use('/user', userRouter);

module.exports = apiRouter;