import React from 'react';
import { LogBox } from 'react-native';
import { RecoilRoot } from 'recoil';

import { UserScreenNavigation } from './src/navigations';

// Date 객체를 발생하는 오류를 무시하기 위해 추가
// https://reactnavigation.org/docs/troubleshooting/#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state 참고
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  return (
    <RecoilRoot>
      <UserScreenNavigation />
    </RecoilRoot>
  );
};

export default App;
