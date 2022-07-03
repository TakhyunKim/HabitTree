/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';

import { StatisticsTextProps } from './StatisticsText.types';
import { styles } from './StatisticsText.styles';

const StatisticsText = ({
  userName,
  totalWater,
  weekTotalWater,
}: StatisticsTextProps) => {
  return (
    <View style={styles.statisticsTextContainer}>
      <Text style={{ ...styles.defaultText, marginBottom: 10 }}>
        지금까지 총 <Text style={styles.waterText}>{totalWater} 리터</Text>의
        물을 주셨어요!
      </Text>
      <Text style={styles.defaultText}>
        이번주는 <Text style={styles.waterText}>{weekTotalWater} 리터</Text>의
        물을 <Text style={styles.userNameText}>{userName}</Text>님의
      </Text>
      <Text style={styles.defaultText}>
        소중한 나무에 주셨답니다 대단해요 👍
      </Text>
    </View>
  );
};

export default StatisticsText;
