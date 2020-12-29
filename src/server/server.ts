import http from 'http';
import { Application } from 'express';

export class HTTPServer {
	public app: Application;
	public server: http.Server;

	constructor(app: Application) {
		this.app = app;
		this.server = http.createServer(app);
	}

	async connectDb(callback: Function, options?: Object) {
		await callback(options);
	}

	async start(port: number) {
		this.server.listen(port);
	}
}
