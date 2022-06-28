import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

interface UseFlagAnimationParams {
  flag: boolean;
  duration: number;
  animationToValue: number;
}

const useFlagAnimation = ({
  flag,
  duration,
  animationToValue,
}: UseFlagAnimationParams): Animated.Value => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startAnimation = (toValue: number) => {
    Animated.timing(animatedValue, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startAnimation(flag ? 0 : animationToValue);
  });

  return animatedValue;
};

export default useFlagAnimation;
