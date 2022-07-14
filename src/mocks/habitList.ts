interface HabitItem {
  date: string;
  isPrivate: boolean;
  isComplete: boolean;
  description: string;
  title: string;
}

export const habitList: { [date: string]: HabitItem[] } = {
  '14': [
    {
      date: '2022년 07월 14일',
      isPrivate: true,
      isComplete: true,
      description: '',
      title: '아침에 물을 마시자!',
    },
    {
      date: '2022년 07월 14일',
      isPrivate: false,
      isComplete: false,
      description: '',
      title: 'TODO 리스트 작성',
    },
    {
      date: '2022년 07월 14일',
      isPrivate: false,
      isComplete: true,
      description: '',
      title: '점심에 샐러드를 먹자!',
    },
  ],
  '15': [
    {
      date: '2022년 07월 15일',
      isPrivate: true,
      isComplete: false,
      description: '',
      title: '잠을 잘 자자',
    },
    {
      date: '2022년 07월 15일',
      isPrivate: false,
      isComplete: false,
      description: '',
      title: '고구마 맛탕 해먹기',
    },
    {
      date: '2022년 07월 15일',
      isPrivate: false,
      isComplete: false,
      description: '',
      title: '걷기 운동 30분 채우기',
    },
  ],
};
