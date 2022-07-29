import { StyleSheet } from 'react-native';

export const styles = (isActiveOfPlus: boolean) =>
  StyleSheet.create({
    habitPlusButtonsBackground: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: isActiveOfPlus ? 'rgba(217, 217, 217, 0.6)' : 'none',
      zIndex: isActiveOfPlus ? 0 : -1,
    },
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
