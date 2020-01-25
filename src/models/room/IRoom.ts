import { IUser } from '../user/IUser';

export interface IRoom extends Pick<IUser, 'id' | 'messages'> {}
