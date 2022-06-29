import { StyleSheet } from 'react-native';

export const styles = (hasborderBottom: boolean) =>
  StyleSheet.create({
    habitAddOptionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 35,
      padding: 0,
      borderBottomColor: hasborderBottom ? '#D4D4D4' : 'none',
      borderBottomWidth: hasborderBottom ? 1 : 0,
    },
    habitAddOptionTitleText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#414141',
    },
  });
