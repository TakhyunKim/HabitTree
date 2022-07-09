import React from 'react';
import { View } from 'react-native';

import { ScreenContainer } from '../';

import { GrowingTreeResult, GrowingTreeImage } from '../../containers';

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
