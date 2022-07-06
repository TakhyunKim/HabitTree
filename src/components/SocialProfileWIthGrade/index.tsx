import React from 'react';
import { Text, View } from 'react-native';

import { TeaLeatIcon } from '../../assets';

import { SocialProfileWIthGradeProps } from './SocialProfileWIthGrade.types';
import { styles } from './SocialProfileWIthGrade.styles';

const SocialProfileWIthGrade = ({
  userName,
  grade,
}: SocialProfileWIthGradeProps) => {
  return (
    <View style={styles.socialProfileWIthGradeContainer}>
      <View style={styles.profile} />
      <View style={styles.userInfoWrapper}>
        <Text style={styles.userNameText}>{userName}님</Text>
        <View style={styles.userNameGradeWrapper}>
          <TeaLeatIcon style={styles.gradeIcon} width={15} height={15} />
          <Text style={styles.gradeText}>{grade}</Text>
        </View>
      </View>
    </View>
  );
};

export default SocialProfileWIthGrade;
