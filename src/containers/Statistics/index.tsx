import React from 'react';
import { View } from 'react-native';

import { WhiteBoxWithSubTitle, ProgressBar } from '../../components';

import { styles } from './Statistics.styles';

const Statistics = () => {
  return (
    <View style={styles.statisticsContainer}>
      <WhiteBoxWithSubTitle subTitle="오늘 지표">
        <ProgressBar percent={30} />
      </WhiteBoxWithSubTitle>
    </View>
  );
};

export default Statistics;
