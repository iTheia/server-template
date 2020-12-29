import { Router } from 'express';

export const chatRouter = Router();

chatRouter.route('/').get().post();

chatRouter.route('/:id').get().post().delete();
