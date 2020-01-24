import { IUser } from '../../models/user/IUser';
import { format } from '../../utils/format';

const users: IUser[] = [
  {
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQndOlUy8bWKd7i3ucOYJc_o-Ng0SMZFVc5TWXz1vZSbznZcR1rVw&s',
    username: '장만월 사장님',
    messages: [
      {
        isMe: false,
        message: '출근했니?',
        createdAt: format('2020-01-24 09:13:22'),
        isRead: true,
        messageType: 'string'
      },
      {
        isMe: false,
        message: '출근했냐구?',
        createdAt: format('2020-01-24 09:15:06'),
        isRead: true,
        messageType: 'string'
      },
      {
        isMe: false,
        message: '어딘데 출근 안하니, 죽고싶니?',
        createdAt: format('2020-01-24 09:15:06'),
        isRead: true,
        messageType: 'string'
      },
      {
        isMe: true,
        message: '해외 출장중입니다.',
        createdAt: format('2020-01-24 10:32:13'),
        isRead: true,
        messageType: 'string'
      }
    ]
  }
];
