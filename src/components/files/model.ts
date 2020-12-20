import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
} from 'typeorm';
import { User } from '../users';

@Entity()
export class File extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	name: string;

	@Column({ nullable: false })
	type: string;

	@Column({ nullable: false })
	size: string;

	@Column()
	path: string;

	@OneToMany(() => User, (userInfo) => userInfo.avatar)
	users: User[];
}
