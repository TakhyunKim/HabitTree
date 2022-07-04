import { StyleSheet } from 'react-native';

export const styles = (minHeight?: number) =>
  StyleSheet.create({
    habitSettingBoxContainer: {
      width: '100%',
      marginTop: 10,
    },
    subTitleText: {
      marginLeft: 12,
      fontSize: 13,
      fontWeight: 'bold',
      color: '#414141',
    },
    habitSettingOptionBox: {
      padding: 5,
      paddingLeft: 12,
      paddingRight: 12,
      marginTop: 5,
      marginBottom: 10,
      borderRadius: 10,
      backgroundColor: '#ffffff',
      minHeight,
    },
  });
