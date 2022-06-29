import React from 'react';

import { HabitPlusSubmitButton } from '../../components';

const HabitCompleteSubmit = () => {
  return (
    <HabitPlusSubmitButton
      buttonTitle="목표 완료하기"
      onPress={() => console.log('목표 제출')}
    />
  );
};

export default HabitCompleteSubmit;
