import { StyleSheet } from 'react-native';

export const styles = (progressPercent: number) =>
  StyleSheet.create({
    progressPercentViewer: {
      width: '100%',
      height: `${progressPercent}%`,
      minHeight: '2%',
      marginBottom: 10,
      backgroundColor:
        progressPercent < 70
          ? progressPercent < 50
            ? progressPercent < 2
              ? '#D9D9D9'
              : 'rgba(236, 121, 121, 0.8)'
            : 'rgba(237, 230, 54, 0.8)'
          : 'rgba(69, 228, 86, 0.8)',
    },
  });
