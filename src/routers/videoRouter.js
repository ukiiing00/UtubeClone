import express from 'express';
import {
    watch,
    getEdit,
    postEdit,
    getUpload,
    postUpload,
    deleteVideo,
    search,
} from '../controllers/videoController';

const videoRouter = express.Router(); // videos\

videoRouter.get('/:id([0-9a-f]{24}$)', watch); // parameters + regular expresstion
videoRouter.route('/:id([0-9a-f]{24})/edit').get(getEdit).post(postEdit);
videoRouter.route('/:id([0-9a-f]{24})/delete').get(deleteVideo);
videoRouter.route('/upload').get(getUpload).post(postUpload);

export default videoRouter;
