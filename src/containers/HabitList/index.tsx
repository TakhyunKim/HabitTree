import React from 'react';
import { View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';

import { HabitItem, EmptyHabit } from '../../components';

import { HabitItem as HabitItemType, HabitCompleteParams } from '../../types';

import { filteredHabitListState } from '../../recoil/selectors';

import { styles } from './HabitList.styles';

const HabitList = () => {
  const filteredHabitList = useRecoilValue(filteredHabitListState);

  const navigation = useNavigation<NavigationProp<HabitCompleteParams>>();

  const handleHabitItemClick = (habitItemInfo: HabitItemType) => {
    navigation.navigate('habitComplete', {
      habitTitle: habitItemInfo.title,
      ...habitItemInfo,
    });
  };

  return (
    <View style={styles.habitListContainer}>
      {filteredHabitList.length === 0 ? (
        <EmptyHabit />
      ) : (
        filteredHabitList.map(habitItemInfo => (
          // TODO: mock data 에는 unique Key 값이 존재하지 않아 title 로 지정, 추후 변경 필요
          <HabitItem
            {...habitItemInfo}
            key={habitItemInfo.title}
            onPress={() => handleHabitItemClick(habitItemInfo)}
            onPressCompleteIcon={() => console.log('complete button click')}
          />
        ))
      )}
    </View>
  );
};

export default HabitList;
