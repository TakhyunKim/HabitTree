import { Animated } from 'react-native';

interface GetAnimationStyleParams {
  animatedValue: Animated.Value;
  inputRange: [number, number];
  outputRange: [number, number];
}

/**
 * useFlagAnimation 과 함께 사용할 수 있는 util function 입니다.
 *
 * useFlagAnimation 은 Animated.Value 을 리턴하며,
 * 해당 util function 은 위 Animated.Value 를 interpolate 한 후
 * 유저가 원하는 input, output range 로 설정해주는 역할을 수행합니다.
 */
const getAnimationStyle = ({
  animatedValue,
  inputRange,
  outputRange,
}: GetAnimationStyleParams) => {
  const animationStyle = animatedValue.interpolate({ inputRange, outputRange });

  return animationStyle;
};

export default getAnimationStyle;
