import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';

import HabitItem from './HabitItem';
import EmptyHabit from './EmptyHabit';

import { HabitItem as HabitItemType, NavigationProp } from '@types';

import { filteredHabitListState } from '@recoil/selectors';

import { styles } from './HabitList.styles';

const HabitList = () => {
  const filteredHabitList = useRecoilValue(filteredHabitListState);

  const navigation = useNavigation<NavigationProp>();

  const handleHabitItemClick = (habitItemInfo: HabitItemType) => {
    navigation.navigate('habitComplete', {
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
