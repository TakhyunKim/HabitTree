import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './GrowingTreeResultText.styles';

const GrowingTreeResultText = () => {
  return (
    <View style={styles.growingTreeResultTextContainer}>
      <Text style={styles.defaultText}>
        <Text style={styles.greenColorText}>탁현</Text> 님의 나무는{' '}
        <Text style={styles.greenColorText}>새싹</Text> 상태를 유지하고 있어요.
      </Text>
      <Text style={styles.defaultText}>
        앞으로 <Text style={styles.blueColorText}>30 리터</Text>를 주시면 나무가
        될 수 있어요!
      </Text>
    </View>
  );
};

export default GrowingTreeResultText;
