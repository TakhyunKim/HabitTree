import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  growingTreeImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  teaLeatIcon: {
    position: 'absolute',
    bottom: '30%',
    zIndex: -10,
  },
  waterCanAnimatedElement: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#8FC6F8',
  },
  waterIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#8FC6F8',
    position: 'absolute',
    bottom: 150,
    right: 20,
  },
  landIcon: {
    osition: 'absolute',
    bottom: '-15%',
    zIndex: -20,
  },
  cloudIcon: {
    position: 'absolute',
    top: 30,
    left: -10,
  },
  cloudsIcon: {
    position: 'absolute',
    top: -10,
    right: -30,
  },
});
