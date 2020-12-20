import { IConfig } from './types';

require('dotenv').config();

export const prod: IConfig = {
	port: parseInt(process.env.DEV_PORT),
	token: process.env.DEV_TOKEN,
	refreshToken: process.env.DEV_REFRESH_TOKEN,
	allowedOrigin: process.env.ORIGIN ? process.env.ORIGIN.split(',') : [''],
	database: {
		port: parseInt(process.env.DB_PORT),
		host: process.env.DB_HOST,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		type: 'mysql',
	},
};
