import React from 'react';

import { HabitPlusSubmitButton } from '@components';

const DayHabitSubmit = () => {
  return (
    <HabitPlusSubmitButton
      buttonTitle="목표 시작하기"
      onPress={() => console.log('목표 제출')}
    />
  );
};

export default DayHabitSubmit;
