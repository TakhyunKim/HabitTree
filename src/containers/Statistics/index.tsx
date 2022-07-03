import React from 'react';
import { View } from 'react-native';

import {
  ProgressBar,
  StatisticsText,
  StatisticsResult,
  WaterCanWithText,
  WhiteBoxWithSubTitle,
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
      <WhiteBoxWithSubTitle subTitle="나무에 준 물 리터는?" minHeight={110}>
        <View style={styles.waterCanStatisticsWrapper}>
          <WaterCanWithText value={30} />
          <StatisticsText totalWater={30} weekTotalWater={5} userName="탁현" />
        </View>
      </WhiteBoxWithSubTitle>
      <WhiteBoxWithSubTitle subTitle="지표 총평" minHeight={110}>
        <StatisticsResult highestDay="수요일" todayCompletePercent={30} />
      </WhiteBoxWithSubTitle>
    </View>
  );
};

export default Statistics;
