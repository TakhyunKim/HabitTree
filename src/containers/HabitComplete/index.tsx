import React, { useState } from 'react';
import { View, Text } from 'react-native';

import {
  TextInput,
  HabitAddOption,
  WhiteBoxWithSubTitle,
} from '../../components';

import { getKoreaDate } from '../../utils';

import { HabitCompleteProps } from './HabitComplete.types';
import { styles } from './HabitComplete.styles';

const HabitComplete = ({
  date,
  habitTitle,
  isPrivate,
  mainImage,
  description,
}: HabitCompleteProps) => {
  const [text, setText] = useState<string>(habitTitle);
  const [certiImage] = useState<string | null>(null);

  return (
    <View style={styles.habitAddContainer}>
      <TextInput placeHolader="목표 타이틀" value={text} onChange={setText} />
      <WhiteBoxWithSubTitle subTitle="기본 설정" minHeight={110}>
        <HabitAddOption optionTitle="날짜" hasborderBottom>
          <Text style={styles.habitAddOptionText}>{getKoreaDate(date)}</Text>
        </HabitAddOption>
        <HabitAddOption optionTitle="상세 내용" hasborderBottom>
          <Text
            style={
              styles[
                description
                  ? 'habitAddOptionText'
                  : 'habitAddOptionTextWithOpacity'
              ]
            }>
            추가하기
          </Text>
        </HabitAddOption>
        <HabitAddOption optionTitle="공개">
          <Text style={styles.habitAddOptionText}>
            {isPrivate ? '비공개' : '공개'}
          </Text>
        </HabitAddOption>
      </WhiteBoxWithSubTitle>
      <WhiteBoxWithSubTitle subTitle="추가 설정" minHeight={110}>
        <HabitAddOption optionTitle="대표 이미지" hasborderBottom>
          <Text
            style={
              styles[
                mainImage
                  ? 'habitAddOptionText'
                  : 'habitAddOptionTextWithOpacity'
              ]
            }>
            첨부하기
          </Text>
        </HabitAddOption>
        <HabitAddOption optionTitle="인증 이미지" hasborderBottom>
          <Text
            style={
              styles[
                certiImage
                  ? 'habitAddOptionText'
                  : 'habitAddOptionTextWithOpacity'
              ]
            }>
            첨부하기
          </Text>
        </HabitAddOption>
      </WhiteBoxWithSubTitle>
    </View>
  );
};

export default HabitComplete;
