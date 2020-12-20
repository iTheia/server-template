import { IConfig } from './types';
import { dev } from './dev';
import { prod } from './prod';
import { CorsOptions } from 'cors';

export let config: IConfig;

const env = process.env.NODE_ENV || 'dev';

switch (env) {
	case 'development':
	case 'dev':
		config = dev;
		break;
	case 'production':
	case 'prod':
		config = prod;
		break;
	default:
		config = dev;
		break;
}

export const corsConfig: CorsOptions = {
	origin: (origin, callback) => {
		if (!origin) return callback(null, true);
		if (config.allowedOrigin.indexOf(origin) === -1) {
			return callback(new Error('not allowed'));
		}
		return callback(null, true);
	},
	credentials: true,
};

export const dbConfig = {
	type: config.database.type,
	host: config.database.host,
	port: config.database.port,
	username: config.database.username,
	password: config.database.password,
	database: config.database.database,
	synchronize: true,
	logging: true,
	entities: ['src/components/**/model.ts'],
};
