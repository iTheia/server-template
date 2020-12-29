import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	ManyToMany,
} from 'typeorm';
import { Chat } from '../Chat';
import { File } from '../files';
import { Message } from '../Messages';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true, default: 1 })
	avatar_id: number;

	@ManyToOne(() => File, (file) => file.users)
	@JoinColumn({ name: 'avatar_id' })
	avatar: File;

	@OneToMany(() => Message, (message) => message.author)
	messages: Message[];

	@ManyToMany(() => Chat, (chat) => chat.members)
	groups: Chat[];

	@ManyToOne(() => Chat, (chat) => chat.author)
	ownerGroups: Chat;
}
