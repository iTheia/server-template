import { hash, compare } from 'bcryptjs';
import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import {
	createAccessToken,
	createRefreshToken,
	sendRefreshToken,
} from './util';
import { config } from '../../config';
import { Login } from './model';
import { errorResponse } from '../util';
import { User } from '../users';
import { IUserInfo } from './types';

export const loginController = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;
		const user = await Login.findOne({
			where: [{ email }, { username: email }],
			relations: ['user', 'user.avatar'],
		});
		if (!user) {
			throw new Error('Usuario o Contraseña incorrectos');
		}
		const validPassword = await compare(password, user.password);
		if (!validPassword) {
			throw new Error('Usuario o Contraseña incorrectos');
		}
		sendRefreshToken(res, createRefreshToken(user));
		res.send({ token: createAccessToken(user) });
	} catch (error) {
		res.send(errorResponse(error));
	}
};

export const registerController = async (req: Request, res: Response) => {
	try {
		const { email, password, username } = req.body;
		const emailExist = await Login.findOne({ email });
		if (emailExist) {
			throw new Error('El email ya existe');
		}
		const user = await User.create().save();
		const { id } = await Login.create({
			email,
			username,
			password: await hash(password, 10),
			user_id: user.id,
		}).save();
		const login = await Login.findOne({
			where: [{ id }],
			relations: ['user', 'user.avatar'],
		});
		sendRefreshToken(res, createRefreshToken(login));
		res.send({ token: createAccessToken(login) });
	} catch (error) {
		res.send(errorResponse(error));
	}
};

export const getCurrentSession = async (req: Request, res: Response) => {
	try {
		const token = req.cookies.token;
		if (!token) {
			throw new Error('No esta logeado');
		}
		const { id } = verify(token, config.refreshToken) as IUserInfo;
		const user = await Login.findOneOrFail(id, {
			relations: ['user', 'user.avatar'],
		});
		sendRefreshToken(res, createRefreshToken(user));
		res.send({ token: createAccessToken(user) });
	} catch (error) {
		res.send(errorResponse(error));
	}
};

export const closeSession = async (req: Request, res: Response) => {
	try {
		const token = req.cookies.token;
		if (!token) {
			throw new Error('No esta logeado');
		}
		sendRefreshToken(res, '');
		res.send({ error: false });
	} catch (error) {
		res.send(errorResponse(error));
	}
};
