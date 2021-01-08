import http from "http";
import { Application } from "express";

export class HTTPServer {
    public app: Application;
    public server: http.Server;

    constructor(app: Application) {
        this.app = app;
        this.server = http.createServer(app);
    }

    async connectDb(callback: Function, options?: Object) {
        try {
            await callback(options);
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }

    async start(port: number) {
        try {
            this.server.listen(port, (err?: any) => {
                if (err) throw err;
            });
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    }
}
