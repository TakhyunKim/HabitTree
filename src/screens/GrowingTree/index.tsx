import React from 'react';
import { View } from 'react-native';

import { ScreenContainer } from '@screens';

import GrowingTreeImage from './GrowingTreeImage';
import GrowingTreeResult from './GrowingTreeResult';

import { styles } from './GrowingTress.styles';

const GrowingTree = () => {
  return (
    <ScreenContainer>
      <View style={styles.growingTreeContainer}>
        <GrowingTreeResult />
        <GrowingTreeImage />
      </View>
    </ScreenContainer>
  );
};

export default GrowingTree;
