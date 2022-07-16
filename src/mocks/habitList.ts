import { HabitItem } from '../types';

export const habitList: { [date: string]: HabitItem[] } = {
  '11': [
    {
      date: new Date(2022, 6, 11),
      isPrivate: false,
      isComplete: false,
      description: '',
      title: '월요일 평화롭게 보내기',
    },
    {
      date: new Date(2022, 6, 11),
      isPrivate: false,
      isComplete: false,
      description: '',
      title: '교보 문고 가서 개발 책 사기',
    },
  ],
  '12': [
    {
      date: new Date(2022, 6, 12),
      isPrivate: false,
      isComplete: false,
      description: '',
      title: '병원 가서 허리 치료 받기',
    },
  ],
  '13': [],
  '14': [
    {
      date: new Date(2022, 6, 14),
      isPrivate: true,
      isComplete: true,
      description: '',
      title: '아침에 물을 마시자!',
    },
    {
      date: new Date(2022, 6, 14),
      isPrivate: false,
      isComplete: false,
      description: '',
      title: 'TODO 리스트 작성',
    },
    {
      date: new Date(2022, 6, 14),
      isPrivate: false,
      isComplete: true,
      description: '',
      title: '점심에 샐러드를 먹자!',
    },
  ],
  '15': [
    {
      date: new Date(2022, 6, 15),
      isPrivate: true,
      isComplete: true,
      description: '',
      title: '잠을 잘 자자',
    },
    {
      date: new Date(2022, 6, 15),
      isPrivate: true,
      isComplete: true,
      description: '',
      title: '고구마 맛탕 해먹기',
    },
    {
      date: new Date(2022, 6, 15),
      isPrivate: false,
      isComplete: false,
      description: '',
      title: '걷기 운동 30분 채우기',
    },
  ],
  '16': [],
  '17': [
    {
      date: new Date(2022, 6, 17),
      isPrivate: false,
      isComplete: true,
      description: '',
      title: '나의 일요일 만끽하기',
    },
  ],
};
