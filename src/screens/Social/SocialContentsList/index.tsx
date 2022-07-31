import React from 'react';
import { View } from 'react-native';

import SocialContents from './SocialContents';

import { styles } from './SocialContentsList.styles';

const SocialContentsList = () => {
  return (
    <View style={styles.socialContentsListContainer}>
      <SocialContents userName="탁현" grade="새싹" contentsTitle="물을 주자" />
      <SocialContents
        userName="안뇽"
        grade="새싹"
        contentsTitle="커피를 마시장"
      />
    </View>
  );
};

export default SocialContentsList;
