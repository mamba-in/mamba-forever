export interface ListItem {
  id: string;
  avatar: string;
  // 通知的标题内容
  title: string;
  // 是否在标题上显示删除线
  titleDelete?: boolean;
  datetime: string;
  type: string;
  read?: boolean;
  description: string;
  clickClose?: boolean;
  extra?: string;
  color?: string;
}

export interface TabItem {
  key: string;
  name: string;
  list: ListItem[];
  unreadlist?: ListItem[];
}

export const tabListData: TabItem[] = [
  {
    key: '1',
    name: '动态',
    list: [
      {
        id: '000000001',
        avatar: 'https://s1.ax1x.com/2022/05/09/O8THZ4.png',
        title: '本周十佳球已为您推送，敬请收看',
        description: '',
        datetime: '2022-05-01',
        type: '1',
      },
      {
        id: '000000002',
        avatar: 'https://s1.ax1x.com/2022/05/09/O87fTH.png',
        title: '您关注的热火VS勇士的比赛将在明天上午11点开始',
        description: '',
        datetime: '2022-04-30',
        type: '1',
      },
      {
        id: '000000003',
        avatar: 'https://s1.ax1x.com/2022/05/09/O8Hq81.png',
        title: '马刺VS火箭明天上午10:30',
        description: '',
        datetime: '2022-04-30',
        // read: true,
        type: '1',
      },
      {
        id: '000000004',
        avatar: 'https://s1.ax1x.com/2022/05/09/O87gOO.png',
        title: '2021-2022季后赛正式开打',
        description: '',
        datetime: '2022-03-09',
        type: '1',
      },
    ],
  },
  {
    key: '2',
    name: '消息',
    list: [
      {
        id: '000000006',
        avatar: 'https://s1.ax1x.com/2022/05/09/OGeJOK.png',
        title: 'NBA官推',
        description: '收到来自NBA官方推送',
        datetime: '2022-04-20',
        type: '2',
        clickClose: true,
      },
      {
        id: '000000007',
        avatar: 'https://s1.ax1x.com/2022/05/09/OGeg0S.png',
        title: 'NBA 2K',
        description: '收到来自NBA2K的官方通知',
        datetime: '2022-04-27',
        type: '2',
        clickClose: true,
      },
      {
        id: '000000008',
        avatar: 'https://s1.ax1x.com/2022/05/09/OGmpX6.png',
        title: 'YouTube',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.',
        datetime: '2022-05-05',
        type: '2',
        clickClose: true,
      },
    ],
  },
];
