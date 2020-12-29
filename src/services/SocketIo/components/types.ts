import { Server, Socket } from 'socket.io';

export interface Props {
	io: Server;
	socket: Socket;
}
