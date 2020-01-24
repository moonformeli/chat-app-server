import { IUser } from '../../models/user/IUser';
import { format } from '../../utils/format';

const users: IUser[] = [
  {
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQndOlUy8bWKd7i3ucOYJc_o-Ng0SMZFVc5TWXz1vZSbznZcR1rVw&s',
    username: '장만월 사장님',
    messages: [
      {
        isMe: true,
        message: '출근했니?',
        createdAt: format('2020-01-24 09:13:22'),
        isRead: false,
        messageType: 'string'
      },
      {
        isMe: true,
        message: '출근했냐구?',
        createdAt: format('2020-01-24 09:15:06'),
        isRead: false,
        messageType: 'string'
      },
      {
        isMe: true,
        message: '어딘데 출근 안하니, 죽고싶니?',
        createdAt: format('2020-01-24 09:15:06'),
        isRead: false,
        messageType: 'string'
      }
    ]
  }
];
