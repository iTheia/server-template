export type roles = 'basic' | 'admin' | 'expert';

export interface IUserInfo {
	id: string;
	role: roles;
	avatar: string;
	name: string;
}
