import { StyleSheet } from 'react-native';

export const styles = (isActiveOfPlus: boolean) =>
  StyleSheet.create({
    habitPlusButtonsContainer: {
      alignItems: 'flex-end',
      position: 'absolute',
      bottom: 20,
      right: 15,
    },
    habitPlusButton: {
      width: 50,
      height: 50,
      alignItems: 'flex-end',
      transform: [{ rotate: isActiveOfPlus ? '45deg' : '0deg' }],
    },
  });
