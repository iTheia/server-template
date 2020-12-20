import { Request } from 'express';
import { IUserInfo } from './auth/types';

export interface IRequest extends Request {
	userInfo: IUserInfo;
}
