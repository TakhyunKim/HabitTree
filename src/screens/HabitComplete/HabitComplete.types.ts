import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HabitCompleteParams } from '../../types';

export type HabitCompleteProp = {
  navigation: NativeStackScreenProps<HabitCompleteParams>;
  route: RouteProp<HabitCompleteParams>;
};
