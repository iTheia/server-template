import http from 'http';
import { Application } from 'express';

export default class Server {
	public app: Application;
	public server: http.Server;

	constructor(app: Application) {
		this.server = http.createServer(app);
		this.app = app;
	}

	async connectDb(callback: Function, options?: Object) {
		await callback(options);
	}

	async start(port: number) {
		this.server.listen(port);
	}
}
