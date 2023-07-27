import express from 'express';
import home from '../controllers/videoController';
import { getJoin, postJoin, login } from '../controllers/userController';
import { search } from '../controllers/videoController';

const rootRouter = express.Router(); // global

rootRouter.get('/', home);
rootRouter.route('/join').get(getJoin).post(postJoin);
rootRouter.get('/login', login);
rootRouter.get('/search', search);

export default rootRouter;
