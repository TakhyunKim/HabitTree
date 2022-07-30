import { StyleSheet } from 'react-native';

export const styles = (isComplete: boolean) =>
  StyleSheet.create({
    habitItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 60,
      margin: 5,
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#ffffff',
    },
    habitItemIconTitleWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    habitItemIcon: {
      width: 35,
      height: 35,
      marginRight: 15,
      borderRadius: 50,
      backgroundColor: '#D9D9D9',
    },
    habitItemTitle: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    habitItemWateringCanIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
      height: 30,
      borderRadius: 50,
      backgroundColor: isComplete ? '#8BF996' : '#D9D9D9',
    },
  });
