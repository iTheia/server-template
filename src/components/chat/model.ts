import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	ManyToOne,
	JoinColumn,
	ManyToMany,
	OneToMany,
} from 'typeorm';
import { Message } from '../messages';
import { User } from '../users';

@Entity()
export class Chat extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToMany(() => User, (user) => user.groups)
	members: User[];

	@Column()
	user_id: number;

	@OneToMany(() => User, (user) => user.ownerGroups)
	@JoinColumn({ name: 'user_id' })
	author: User;

	@ManyToOne(() => Message, (message) => message.chat)
	messages: Message[];
}
