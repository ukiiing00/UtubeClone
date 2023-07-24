import express from 'express';
import { see, edit, upload, deleteVideo } from '../controllers/videoController';

const videoRouter = express.Router(); // videos\

videoRouter.get('/upload', upload);
videoRouter.get('/:id(\\d+)', see); // parameters + regular expresstion
videoRouter.get('/:id(\\d+)/edit', edit);
videoRouter.get('/:id(\\d+)/delete', deleteVideo);

export default videoRouter;