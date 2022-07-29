/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';

import { StatisticsResultProps } from './StatisticsResult.types';
import { styles } from './StatisticsResult.styles';

const StatisticsResult = ({
  highestDay,
  todayCompletePercent,
}: StatisticsResultProps) => {
  return (
    <View style={styles.statisticsResultContainer}>
      <Text style={styles.defaultText}>
        오늘 하루{' '}
        <Text style={styles.highlightText}>{todayCompletePercent}%</Text> 의
        목표량을 기록했어요!
      </Text>
      <Text style={{ ...styles.defaultText, marginBottom: 10 }}>
        정말 대단해요!
      </Text>
      <Text style={styles.defaultText}>
        이번 주에는 <Text style={styles.highlightText}>{highestDay}</Text> 에
        가장 많은 목표를 달성하셨네요!
      </Text>
    </View>
  );
};

export default StatisticsResult;
