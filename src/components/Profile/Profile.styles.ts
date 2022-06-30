import { StyleSheet } from 'react-native';

export const styles = (size?: number) =>
  StyleSheet.create({
    profileContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImage: {
      width: size,
      height: size,
      marginRight: 10,
      borderRadius: 50,
      backgroundColor: '#D9D9D9',
    },
    profileTextContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      height: size,
    },
    profileNameText: {
      color: '#414141',
      fontWeight: 'bold',
    },
    profilePlantText: {
      color: '#009C10',
      fontWeight: 'bold',
    },
  });
