import express from 'express';
import { edit, remove } from '../controllers/userController';

const userRouter = express.Router(); // users

userRouter.get('/edit', edit);
userRouter.get('/delete', remove);

export default userRouter;
