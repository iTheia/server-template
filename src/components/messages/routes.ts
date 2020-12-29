import { Router } from 'express';

export const messagesRouter = Router();

messagesRouter.route('/').get().post();

messagesRouter.route('/:id').get().post().delete();
