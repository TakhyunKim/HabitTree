import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  socialProfileWIthGradeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  userInfoWrapper: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  profile: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
  },
  userNameGradeWrapper: {
    flexDirection: 'row',
    marginTop: 7,
  },
  userNameText: {
    color: '#414141',
    fontWeight: 'bold',
    fontSize: 12,
  },
  gradeIcon: {
    marginRight: 5,
  },
  gradeText: {
    color: '#009C10',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
