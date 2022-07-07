import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  socialContentsContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
  },
  contentsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    marginBottom: 10,
  },
  contentsTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#414141',
  },
  imageViewer: {
    width: '100%',
    height: 200,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
});
