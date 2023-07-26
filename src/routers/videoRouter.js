import express from 'express';
import { watch, getEdit, postEdit } from '../controllers/videoController';

const videoRouter = express.Router(); // videos\

videoRouter.get('/:id(\\d+)', watch); // parameters + regular expresstion
videoRouter.get('/:id(\\d+)/edit', getEdit);
videoRouter.post('/:id(\\d+)/edit', postEdit);
videoRouter.route('/:id(\\d+)/edit').get(getEdit).post(postEdit);

export default videoRouter;
