import { Server as HTTPServer } from 'http';
import { Server as SocketIoServer, Socket } from 'socket.io';
import { SocketIoConfig } from './config';
import { Chat } from './components';

export default function SocketIo(server: HTTPServer) {
	const io: SocketIoServer = require('socket.io')(server, SocketIoConfig);

	io.on('connection', (socket: Socket) => {
		const props = { io, socket };
		Chat(props);
	});
}
