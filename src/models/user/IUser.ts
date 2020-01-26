export interface IUser {
  profile: string;
  username: string;
  messages: IMessage[];
  id: string;
}

export interface IMessage {
  isMe: boolean;
  // id: string;
  message: string;
  createdAt: string;
  isRead: boolean;
  messageType: 'string' | 'image';
}
