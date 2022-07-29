import { StyleSheet } from 'react-native';

export const styles = (width: number) =>
  StyleSheet.create({
    weekViewerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginBottom: 10,
      paddingTop: 50,
      backgroundColor: '#ffffff',
    },
    yearAndMonthWrapper: {
      width: '90%',
    },
    weekViewerScrollWrapper: {
      width: '300%',
    },
    dayViewerWrapper: {
      width,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
