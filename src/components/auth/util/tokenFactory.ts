import { Response } from 'express';
import { sign } from 'jsonwebtoken';
import { config } from '../../../config';
import { Login } from '../model';

export const createRefreshToken = (user: Login) => {
	return sign({ id: user.user_id, role: user.role }, config.token, {
		expiresIn: '7d',
	});
};

export const sendRefreshToken = (res: Response, token: string) => {
	res.cookie('token', token, {
		httpOnly: true,
	});
};

export const createAccessToken = (user: Login) => {
	try {
		let expiresIn = '15m';
		if (process.env.NODE_ENV === 'dev') {
			expiresIn = '15d';
		}
		const { avatar } = user.user;
		return sign(
			{
				id: user.user_id,
				role: user.role,
				username: user.username,
				email: user.email,
				tokenVersion: user.tokenVersion,
				avatar: `${avatar.path + avatar.name}.${avatar.type}`,
			},
			config.token,
			{ expiresIn }
		);
	} catch (error) {
		console.log(error);
	}
};
