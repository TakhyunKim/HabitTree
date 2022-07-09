import { StyleSheet } from 'react-native';

export const styles = (totalWater: number) =>
  StyleSheet.create({
    waterProgressContainer: {
      flexDirection: 'row',
      width: '100%',
      height: 20,
      backgroundColor: '#D9D9D9',
      borderRadius: 30,
    },
    waterProgress: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      width: `${totalWater}%`,
      height: '100%',
      paddingRight: 15,
      backgroundColor: '#8FC6F8',
      borderRadius: 30,
    },
    waterProgressText: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#0057A7',
    },
  });
