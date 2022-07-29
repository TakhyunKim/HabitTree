import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  profileHeaderContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'rgba(65, 65, 65, 0.1)',
    borderBottomWidth: 1,
  },
  profileHeaderWrapper: {
    width: '90%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileTitleText: {
    color: '#414141',
    fontWeight: 'bold',
    fontSize: 15,
  },
  cancelText: {
    color: '#414141',
    fontWeight: 'normal',
  },
  completeText: {
    color: '#4995DC',
    fontWeight: 'bold',
  },
});
