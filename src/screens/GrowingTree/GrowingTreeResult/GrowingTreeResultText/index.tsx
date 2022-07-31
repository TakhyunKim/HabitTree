import React from 'react';
import { View, Text } from 'react-native';

import { GrowingTreeResultTextProps } from './GrowingTreeResultText.types';
import { styles } from './GrowingTreeResultText.styles';

const GrowingTreeResultText = ({
  grade,
  userName,
  waterNeededForUgrade,
}: GrowingTreeResultTextProps) => {
  return (
    <View style={styles.growingTreeResultTextContainer}>
      <Text style={styles.defaultText}>
        <Text style={styles.greenColorText}>{userName}</Text> 님의 나무는{' '}
        <Text style={styles.greenColorText}>{grade}</Text> 상태를 유지하고
        있어요.
      </Text>
      <Text style={styles.defaultText}>
        앞으로{' '}
        <Text style={styles.blueColorText}>{waterNeededForUgrade}리터</Text>를
        주시면 나무가 될 수 있어요!
      </Text>
    </View>
  );
};

export default GrowingTreeResultText;
