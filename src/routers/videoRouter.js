import express from 'express';
import {
    watch,
    edit,
    upload,
    deleteVideo,
} from '../controllers/videoController';

const videoRouter = express.Router(); // videos\

videoRouter.get('/upload', upload);
videoRouter.get('/:id(\\d+)', watch); // parameters + regular expresstion
videoRouter.get('/:id(\\d+)/edit', edit);
videoRouter.get('/:id(\\d+)/delete', deleteVideo);

export default videoRouter;
