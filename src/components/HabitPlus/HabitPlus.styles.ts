import { StyleSheet } from 'react-native';

export const styles = (backgroundColor: string) =>
  StyleSheet.create({
    habitPlusContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    habitPlusIconContanier: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
      height: 30,
      backgroundColor,
      borderRadius: 50,
    },
  });
