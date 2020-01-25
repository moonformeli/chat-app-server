import { IUser } from '../../models/user/IUser';
import { format } from '../../utils/format';

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const makeId = length => {
  let result = '';

  const charactersLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const users: IUser[] = [
  {
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQndOlUy8bWKd7i3ucOYJc_o-Ng0SMZFVc5TWXz1vZSbznZcR1rVw&s',
    username: '장만월 사장님',
    id: makeId(16),
    messages: [
      {
        isMe: false,
        message: '출근했니?',
        createdAt: format('2020-01-25 09:13:22'),
        isRead: true,
        messageType: 'string'
      },
      {
        isMe: false,
        message: '출근했냐구?',
        createdAt: format('2020-01-25 09:15:06'),
        isRead: false,
        messageType: 'string'
      },
      {
        isMe: false,
        message: '어딘데 출근 안하니, 죽고싶니?',
        createdAt: format('2020-01-25 09:15:06'),
        isRead: false,
        messageType: 'string'
      }
    ]
  },
  {
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86T7wS9eXeJ7zHW3rKbjsegQqvDUArn7cQ2B4ixZ_huS3tB-omA&s',
    username: '신정근 바텐더',
    id: makeId(16),
    messages: [
      {
        isMe: false,
        message: '오시는 길에 와인 몇 병만 사다주세요.',
        createdAt: format('2020-01-23 14:34:00'),
        isRead: true,
        messageType: 'string'
      }
    ]
  },
  {
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjitu5LCjJN-xeEeADr5BbmcjJcSY9DtCEYBGdOb_RF2Y6LPnACg&s',
    username: '이미라 의사',
    id: makeId(16),
    messages: [
      {
        isMe: false,
        message:
          '휴가 잘 보내고 계신가요? 다름이 아니라 지난번에 말씀하셨던 거 있잖아요. 그거 물어보려고요',
        createdAt: format('2020-01-20 18:20:00'),
        isRead: true,
        messageType: 'string'
      }
    ]
  },
  {
    profile:
      'data:image/jpeg;base64,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',
    username: '구찬성 지배인',
    id: makeId(16),
    messages: [
      {
        isMe: false,
        message: '아 휴가셨군요. 약속은 다음으로 미루시죠!',
        createdAt: format('2020-01-19 08:34:12'),
        isRead: true,
        messageType: 'string'
      }
    ]
  },
  {
    profile:
      'https://w.namu.la/s/54e768aff8b6c59a6a99069efdb378aa758847e1725f7b4cd337d986280a4edb1d850e07a7a2baeec692d879336584963dbe7171ff1319755e8d40af30a387bb7adec22e5517f915ffc4760a03e77c9cc0995cec6e382816d442d79f146bf91a7ef825d12f9623e7c4a87e8fef74c765',
    username: '노준석 총지배인',
    id: makeId(16),
    messages: [
      {
        isMe: false,
        message:
          '휴가에서 언제 돌아오시는지요. 돌아오시면 긴히 드릴 이야기가 있으니 연락 부탁드립니다.',
        createdAt: format('2020-01-18 23:44:01'),
        isRead: true,
        messageType: 'string'
      }
    ]
  },
  {
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFMVKE1DmWDKMPiCB_AOww2ZTLIAEKlTQhk7T6Z9_d1CZ_c7KYXA&s',
    username: '김유나 인턴',
    id: makeId(16),
    messages: [
      {
        isMe: false,
        message: '304호 키를 잃어버렸어요 어떻게 해야하죠 ㅠ',
        createdAt: format('2020-01-10 17:23:52'),
        isRead: true,
        messageType: 'string'
      }
    ]
  },
  {
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQson1RhoevdJQ4FeTe8Uca57DlgskE17iFuVvahXFDm9WkffYt&s',
    username: '구현모',
    id: makeId(16),
    messages: [
      {
        isMe: true,
        message: '술먹자',
        createdAt: format('2019-12-24 23:00:00'),
        isRead: true,
        messageType: 'string'
      }
    ]
  }
];
