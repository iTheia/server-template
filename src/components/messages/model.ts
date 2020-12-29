import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { Chat } from '../Chat';
import { User } from '../users';

@Entity()
export class Message extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	content: string;

	@Column({ nullable: true })
	date: string;

	@Column()
	user_id: number;

	@ManyToOne(() => User, (userInfo) => userInfo.messages)
	@JoinColumn({ name: 'user_id' })
	author: User;

	@ManyToOne(() => Chat, (chat) => chat.messages)
	chat: Chat;
}
