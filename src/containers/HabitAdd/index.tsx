import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { View, Text } from 'react-native';

import {
  TextInput,
  HabitAddOption,
  WhiteBoxWithSubTitle,
} from '../../components';

import { getKoreaDate } from '../../utils';

import { habitDay } from '../../recoil/atoms';

import { HabitAddProps } from './HabitAdd.types';
import { styles } from './HabitAdd.styles';

const HabitAdd = ({ habitAddOption }: HabitAddProps) => {
  const [text, setText] = useState<string>('');

  const today = useRecoilValue(habitDay);

  return (
    <View style={styles.habitAddContainer}>
      <TextInput placeHolader="목표 타이틀" value={text} onChange={setText} />
      <WhiteBoxWithSubTitle subTitle="기본 설정" minHeight={110}>
        <HabitAddOption
          optionTitle={habitAddOption === 'day' ? '날짜' : '목표 시간 날짜'}
          hasborderBottom>
          <Text style={styles.habitAddOptionText}>{getKoreaDate(today)}</Text>
        </HabitAddOption>
        <HabitAddOption optionTitle="상세 내용" hasborderBottom>
          <Text style={styles.habitAddOptionTextWithOpacity}>추가하기</Text>
        </HabitAddOption>
        {habitAddOption === 'week' && (
          <HabitAddOption optionTitle="반복" hasborderBottom>
            <Text style={styles.habitAddOptionTextWithOpacity}>매일</Text>
          </HabitAddOption>
        )}
        <HabitAddOption optionTitle="공개">
          <Text style={styles.habitAddOptionText}>공개하기</Text>
        </HabitAddOption>
      </WhiteBoxWithSubTitle>
      <WhiteBoxWithSubTitle subTitle="추가 설정" minHeight={110}>
        <HabitAddOption optionTitle="대표 이미지" hasborderBottom>
          <Text style={styles.habitAddOptionTextWithOpacity}>첨부하기</Text>
        </HabitAddOption>
      </WhiteBoxWithSubTitle>
    </View>
  );
};

export default HabitAdd;
