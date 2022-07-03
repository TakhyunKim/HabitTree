import React from 'react';
import { View } from 'react-native';

import {
  WhiteBoxWithSubTitle,
  ProgressBar,
  PortraitModeProgressBarList,
} from '../../components';

import { styles } from './Statistics.styles';

const Statistics = () => {
  return (
    <View style={styles.statisticsContainer}>
      <WhiteBoxWithSubTitle subTitle="오늘 지표">
        <ProgressBar percent={30} />
      </WhiteBoxWithSubTitle>
      <WhiteBoxWithSubTitle subTitle="주간 지표">
        <PortraitModeProgressBarList
          weekPercent={{
            월: 70,
            화: 30,
            수: 90,
            목: 100,
            금: 10,
            토: 0,
            일: 0,
          }}
        />
      </WhiteBoxWithSubTitle>
    </View>
  );
};

export default Statistics;
