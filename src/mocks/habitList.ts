import { HabitItem } from '../types';
import { getWeek } from '../utils';

const week = getWeek();

export const habitList: { [date: string]: HabitItem[] } = {
  [week['월'].getDate()]: [
    {
      date: week['월'],
      isPrivate: false,
      isComplete: false,
      description: '',
      title: '월요일 평화롭게 보내기',
    },
    {
      date: week['월'],
      isPrivate: false,
      isComplete: false,
      description: '',
      title: '교보 문고 가서 개발 책 사기',
    },
  ],
  [week['화'].getDate()]: [
    {
      date: week['화'],
      isPrivate: false,
      isComplete: false,
      description: '',
      title: '병원 가서 허리 치료 받기',
    },
  ],
  [week['수'].getDate()]: [],
  [week['목'].getDate()]: [
    {
      date: week['목'],
      isPrivate: true,
      isComplete: true,
      description: '',
      title: '아침에 물을 마시자!',
    },
    {
      date: week['목'],
      isPrivate: false,
      isComplete: false,
      description: '',
      title: 'TODO 리스트 작성',
    },
    {
      date: week['목'],
      isPrivate: false,
      isComplete: true,
      description: '',
      title: '점심에 샐러드를 먹자!',
    },
  ],
  [week['금'].getDate()]: [
    {
      date: week['금'],
      isPrivate: true,
      isComplete: true,
      description: '',
      title: '잠을 잘 자자',
    },
    {
      date: week['금'],
      isPrivate: true,
      isComplete: true,
      description: '',
      title: '고구마 맛탕 해먹기',
    },
    {
      date: week['금'],
      isPrivate: false,
      isComplete: false,
      description: '',
      title: '걷기 운동 30분 채우기',
    },
  ],
  [week['토'].getDate()]: [],
  [week['일'].getDate()]: [
    {
      date: week['일'],
      isPrivate: false,
      isComplete: true,
      description: '',
      title: '나의 일요일 만끽하기',
    },
  ],
};
