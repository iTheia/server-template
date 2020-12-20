import { IConfig } from './types';

require('dotenv').config();

export const dev: IConfig = {
	port: parseInt(process.env.DEV_PORT) || 5000,
	token: process.env.DEV_TOKEN || 'QEWQEWQEWQE',
	refreshToken: process.env.DEV_REFRESH_TOKEN || 'ASDAS3123;',
	allowedOrigin:
		process.env.DEV_ORIGIN !== undefined
			? process.env.DEV_ORIGIN.split(',')
			: ['http://localhost:3000'],
	database: {
		port: parseInt(process.env.DEV_DB_PORT) || 3306,
		host: process.env.DEV_DB_HOST || 'localhost',
		username: process.env.DEV_DB_USERNAME || 'root',
		password: process.env.DEV_DB_PASSWORD || '',
		database: process.env.DEV_DB_DATABASE || 'database-name',
		type: 'mysql',
	},
};
