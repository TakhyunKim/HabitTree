import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HabitPlusParams } from '../../types';

export type HabitPlusProp = {
  navigation: NativeStackScreenProps<HabitPlusParams>;
  route: RouteProp<HabitPlusParams>;
};
