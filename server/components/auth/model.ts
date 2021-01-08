import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToOne,
	JoinColumn,
} from 'typeorm';
import { User } from '../users';

@Entity()
export class Login extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	username: string;

	@Column({ unique: true })
	email: string;

	@Column({ nullable: false })
	password: string;

	@Column({ default: 0 })
	tokenVersion: number;

	@Column({ default: 'basic' })
	role: string;

	@Column({ default: false })
	isConfirmed: boolean;

	@Column()
	user_id: number;
	@OneToOne(() => User)
	@JoinColumn({ name: 'user_id' })
	user: User;
}
