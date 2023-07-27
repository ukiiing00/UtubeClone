import express from 'express';
import home from '../controllers/videoController';
import { join, login } from '../controllers/userController';
import { search } from '../controllers/videoController';

const globalRouter = express.Router(); // global

globalRouter.get('/', home);
globalRouter.get('/join', join);
globalRouter.get('/login', login);
globalRouter.get('/search', search);

export default globalRouter;
