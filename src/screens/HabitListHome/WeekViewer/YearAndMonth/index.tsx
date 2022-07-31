import React from 'react';
import { View, Text } from 'react-native';

import { YearAndMonthProps } from './YearAndMonth.types';
import { styles } from './YearAndMonth.styles';

const YearAndMonth = ({ day }: YearAndMonthProps) => {
  return (
    <View style={styles.yearAndMonthContainer}>
      <Text style={styles.yaerAndMonthText}>
        {`${day.getFullYear()}년 ${day.getMonth() + 1}월`}
      </Text>
    </View>
  );
};

export default YearAndMonth;
