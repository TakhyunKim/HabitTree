import React from 'react';
import { View } from 'react-native';

import { HabitItem } from '../../components';

import { styles } from './HabitList.styles';

const HabitList = () => {
  return (
    <View style={styles.habitListContainer}>
      <HabitItem title="아침에 물을 마시자!" isComplete={true} />
      <HabitItem title="TODO 리스트 작성" isComplete={false} />
      <HabitItem title="점심에 샐러드를 먹자!" isComplete={false} />
    </View>
  );
};

export default HabitList;
