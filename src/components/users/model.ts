import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	JoinColumn,
	ManyToOne,
} from 'typeorm';
import { File } from '../files';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true, default: 1 })
	avatar_id: number;

	@ManyToOne(() => File, (file) => file.users)
	@JoinColumn({ name: 'avatar_id' })
	avatar: File;
}
