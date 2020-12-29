import { Router } from 'express';
import { authRoutes } from '../../components';

export const router = Router();

router.use('/auth', authRoutes);
