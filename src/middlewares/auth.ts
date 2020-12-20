import { NextFunction, Response } from 'express';
import { config } from '../config';
import { verify } from 'jsonwebtoken';
import { IRequest } from '../components/types';
import { errorResponse, IUserInfo } from '../components';

export const authorizationMiddleware = async (
	req: IRequest,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.headers['authorization'].split(' ')[1];
		if (!token) {
			throw new Error('not logged');
		}
		const userInfo = verify(token, config.token) as IUserInfo;
		req.userInfo = userInfo;
		next();
	} catch (error) {
		res.send(errorResponse(error));
	}
};
