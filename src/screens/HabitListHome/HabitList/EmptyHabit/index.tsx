import React from 'react';
import { View, Text } from 'react-native';

import { PlusIcon, EmptyPackageIcon } from '@assets';

import { styles } from './EmptyHabit.styles';

const EmptyHabit = () => {
  return (
    <View style={styles.emptyHabitContainer}>
      <EmptyPackageIcon
        style={styles.emptyPackageIcon}
        width={80}
        height={95}
      />
      <Text style={styles.emptyText}>
        오른쪽 하단{' '}
        <View style={styles.plusButtonWrapper}>
          <PlusIcon width={8} height={8} fill="#000000" />
        </View>{' '}
        버튼으로
      </Text>
      <Text style={styles.emptyText}>루틴을 추가해보세요!</Text>
    </View>
  );
};

export default EmptyHabit;
