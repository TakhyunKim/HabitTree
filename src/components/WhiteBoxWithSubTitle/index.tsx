import React from 'react';
import { View, Text } from 'react-native';

import { WhiteBoxWithSubTitleProps } from './WhiteBoxWithSubTitle.types';
import { styles } from './WhiteBoxWithSubTitle.styles';

const WhiteBoxWithSubTitle = ({
  children,
  subTitle,
  minHeight,
}: WhiteBoxWithSubTitleProps) => {
  const style = styles(minHeight);

  return (
    <View style={style.habitSettingBoxContainer}>
      <Text style={style.subTitleText}>{subTitle}</Text>
      <View style={style.habitSettingOptionBox}>{children}</View>
    </View>
  );
};

export default WhiteBoxWithSubTitle;
