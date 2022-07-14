import React from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { HabitItem } from '../../components';

import { filteredHabitListState } from '../../recoil/selectors';

import { styles } from './HabitList.styles';

const HabitList = () => {
  const filteredHabitList = useRecoilValue(filteredHabitListState);

  return (
    <View style={styles.habitListContainer}>
      {filteredHabitList.map(({ title, isComplete }) => (
        // TODO: mock data 에는 unique Key 값이 존재하지 않아 title 로 지정, 추후 변경 필요
        <HabitItem key={title} title={title} isComplete={isComplete} />
      ))}
    </View>
  );
};

export default HabitList;
