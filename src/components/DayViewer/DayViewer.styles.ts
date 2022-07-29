import { StyleSheet } from 'react-native';

export const styles = (isTargetDay: boolean) =>
  StyleSheet.create({
    dayViewerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 12,
    },
    dayOfTheWeekText: {
      marginBottom: 5,
      fontWeight: 'bold',
      color: '#414141',
    },
    dayTextWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
      height: 30,
      backgroundColor: isTargetDay ? '#8BF996' : undefined,
      borderRadius: 50,
    },
    dayText: {
      fontWeight: 'bold',
      color: '#414141',
    },
  });
