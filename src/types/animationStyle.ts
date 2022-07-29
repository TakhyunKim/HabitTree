import { Animated } from 'react-native';

export type AnimationStyleInfo = {
  styleName: string;
  animatedValue: Animated.Value;
  inputRange: [number, number];
  outputRange: [number, number];
};
