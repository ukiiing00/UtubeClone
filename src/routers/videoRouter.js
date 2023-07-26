import express from 'express';
import {
    watch,
    getEdit,
    postEdit,
    getUpload,
    postUpload,
} from '../controllers/videoController';

const videoRouter = express.Router(); // videos\

videoRouter.get('/:id(\\d+)', watch); // parameters + regular expresstion
videoRouter.route('/:id(\\d+)/edit').get(getEdit).post(postEdit);
videoRouter.route('/upload').get(getUpload).post(postUpload);

export default videoRouter;
