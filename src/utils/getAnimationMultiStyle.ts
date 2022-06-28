import { Animated } from 'react-native';

import { AnimationStyleInfo } from '../types';

import { getAnimationStyle } from './';

interface GetAnimationMultiStyleParams {
  animationStylesInfo: AnimationStyleInfo[];
}

/**
 * 기존 getAnimationStyle 의 경우 단일 스타일에 대한 정의만 가능하지만,
 * 해당 util function 은 여러 개의 스타일을 전달 및 정의할 수 있습니다.
 */
const getAnimationMultiStyle = ({
  animationStylesInfo,
}: GetAnimationMultiStyleParams): Animated.AnimatedInterpolation[] => {
  const animationStyles: Animated.AnimatedInterpolation[] =
    animationStylesInfo.map(animationStyleInfo =>
      getAnimationStyle(animationStyleInfo),
    );

  return animationStyles;
};

export default getAnimationMultiStyle;
