import React, { useRef, useState } from 'react';
import { View, Animated, PanResponder, TouchableOpacity } from 'react-native';

import {
  LandIcon,
  CloudIcon,
  CloudsIcon,
  TeaLeatIcon,
  WateringCan,
} from '../../assets';

import { styles } from './GrowingTreeImage.styles';

const GrowingTreeImage = () => {
  const [isWateringCanActive, setIsWateringCanActive] =
    useState<boolean>(false);

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  const handleWWateringCanClick = () => {
    setIsWateringCanActive(prevState => !prevState);
  };

  return (
    <View style={styles.growingTreeImageContainer}>
      <TeaLeatIcon style={styles.teaLeatIcon} width={40} height={40} />
      <LandIcon style={styles.landIcon} width="120%" height="100%" />
      <CloudIcon style={styles.cloudIcon} width="30%" height="30%" />
      <CloudsIcon style={styles.cloudsIcon} width="30%" height="30%" />
      <Animated.View {...panResponder.panHandlers} style={[pan.getLayout()]}>
        <TouchableOpacity
          style={styles.waterIconWrapper}
          onPress={handleWWateringCanClick}>
          <WateringCan width={30} height={30} fill="#000000" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default GrowingTreeImage;
