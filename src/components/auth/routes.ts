import { Router } from 'express';
import {
	closeSession,
	getCurrentSession,
	loginController,
	registerController,
} from './controller';

export const authRoutes = Router();

authRoutes.post('/login', loginController);
authRoutes.post('/signup', registerController);
authRoutes.get('/close', closeSession);
authRoutes.get('/current', getCurrentSession);
