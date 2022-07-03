import { StyleSheet } from 'react-native';

export const styles = (progressPercent: number) =>
  StyleSheet.create({
    progressBarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginTop: 10,
      marginBottom: 10,
    },
    progressBarWrapper: {
      width: '85%',
      height: 25,
      backgroundColor: 'rgba(217, 217, 217, 0.3)',
      borderRadius: 10,
    },
    progressPercentViewer: {
      width: `${progressPercent}%`,
      height: '100%',
      backgroundColor:
        progressPercent < 70
          ? progressPercent < 50
            ? 'rgba(236, 121, 121, 0.8)'
            : 'rgba(237, 230, 54, 0.8)'
          : 'rgba(69, 228, 86, 0.8)',
      borderRadius: 10,
    },
    progressPercentText: {
      fontWeight: 'bold',
      color:
        progressPercent < 70
          ? progressPercent < 50
            ? '#C62B2B'
            : '#AFA800'
          : '#009C10',
    },
  });
