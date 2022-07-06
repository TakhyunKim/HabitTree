import React from 'react';
import { Text, View } from 'react-native';

import { SocialProfileWIthGrade } from '../';

import { SocialContentsProps } from './SocialContents.types';
import { styles } from './SocialContents.styles';

const SocialContents = ({
  grade,
  userName,
  contentsTitle,
}: SocialContentsProps) => {
  return (
    <View style={styles.socialContentsContainer}>
      <View style={styles.contentsHeader}>
        <SocialProfileWIthGrade userName={userName} grade={grade} />
        <Text style={styles.contentsTitle}>{contentsTitle}</Text>
      </View>
      <View style={styles.imageViewer} />
    </View>
  );
};

export default SocialContents;
