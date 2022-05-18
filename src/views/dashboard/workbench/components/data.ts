interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
}

interface NavItem {
  title: string;
  icon: string;
}

interface DynamicInfoItem {
  avatar: string;
  date: string;
  desc: string;
}

export const navItems: NavItem[] = [
  {
    title: 'PLAYOFFS',
    icon: 'playoffs|svg'
  },
  {
    title: 'ESPN',
    icon: 'espn|svg'
  },
  {
    title: 'TNT',
    icon: 'tnt|svg'
  },
  {
    title: 'WILSON',
    icon: 'wilson|svg'
  },
  {
    title: 'JORDAN',
    icon: 'jordan|svg'
  },
  {
    title: 'EA',
    icon: 'ea|svg'
  },
];

export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    avatar: '23|svg',
    date: '刚刚',
    desc: `<a>欧文</a> 关注了 <a>詹姆斯</a>`,
  },
  {
    avatar: '23|svg',
    date: '1个小时前',
    desc: `<a>欧文</a> 取关了 <a>詹姆斯</a> `,
  },
  {
    avatar: '23|svg',
    date: '2小时前',
    desc: `<a>欧文</a> 关注了 <a>詹姆斯</a> `,
  },
  {
    avatar: 'james|svg',
    date: '2天前',
    desc: `<a>杜兰特</a> 点赞了 <a>斯嘉丽·约翰逊</a> 的Twitter`,
  },
  {
    avatar: '75Logo|svg',
    date: '3天前',
    desc: `<a>NBA官推</a> 发布 <a>庆祝75周年专题纪录片🎉</a>`,
  },
  {
    avatar: 'suns|svg',
    date: '1周前',
    desc: `<a>太阳官推</a> 发布 <a>你永远可以相信CP3，Point God！</a> `,
  },
  {
    avatar: '30|svg',
    date: '1周前',
    desc: `<a>约基奇</a> 发布了个人动态 <a>WTM真的尽力了💦</a> `,
  },
  {
    avatar: 'playoffs|svg',
    date: '1个月前',
    desc: `<a>PLAYOFFS官推</a> 2021-2022季后赛热血开打 <a>赛程表</a>`,
  },
];

export const groupItems: GroupItem[] = [
  {
    title: 'Lakers',
    icon: 'lakers|svg',
    color: '',
    desc: 'Welcome to the #LakeShow | 🏆 17x Champions',
    group: 'Los Angeles Lakers',
    date: '2022-05-01',
  },
  {
    title: 'Bulls',
    icon: 'bulls|svg',
    color: '',
    desc: 'We still have the best fans in the WORLD. Thank you!',
    group: 'Chicago Bulls',
    date: '2022-05-01',
  },
  {
    title: 'Warriors',
    icon: 'warriors|svg',
    color: '',
    desc: ' It is an exciting time in our history as we break ground, in every sense. ',
    group: 'Golden State Warriors',
    date: '2022-05-01',
  },
  {
    title: 'Celtics',
    icon: 'celtics|svg',
    color: '',
    desc: 'Seventeen NBA Championships. A record eight in a row from 1959-1966. Three separate championship eras.',
    group: 'Boston Celtics',
    date: '2022-05-01',
  },
  {
    title: 'Jazz',
    icon: 'jazz|svg',
    color: '',
    desc: 'Here to hoop since 1979 🏀 | #TakeNote',
    group: 'Utah Jazz',
    date: '2022-05-01',
  },
  {
    title: 'Cavaliers',
    icon: 'cleveland|svg',
    color: '',
    desc: 'We pay homage to the history and journey of the Cavaliers franchise over the past 50 years.',
    group: 'Cleveland Cavaliers',
    date: '2022-05-01',
  },
];
