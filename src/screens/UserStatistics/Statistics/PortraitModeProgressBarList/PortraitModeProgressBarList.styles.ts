import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  portraitModeProgressBarListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    height: 160,
    padding: 10,
  },
  progressBarWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '8%',
    height: '80%',
  },
  dayText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#414141',
  },
});
