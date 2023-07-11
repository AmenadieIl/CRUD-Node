import express from 'express'
import { UserController } from '../controller/userController.js'
const userRouter = express.Router();
const userController = new UserController;
userRouter
    .route('/users')
    .post(userController.userValidation, userController.createUser)
    .get(userController.getUsers);


userRouter
    .route('/users/:userId')
    .get(userController.getUserById)
    .put(userController.userValidation, userController.updateUser)
    .delete(userController.deleteUser);

export { userRouter }