import express from 'express';
import { watch, edit } from '../controllers/videoController';

const videoRouter = express.Router(); // videos\

videoRouter.get('/watch', watch);
videoRouter.get('/edit', edit);

export default videoRouter;
