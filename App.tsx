import React from 'react';
import { RecoilRoot } from 'recoil';

import { UserScreenNavigation } from './src/navigations';

const App = () => {
  return (
    <RecoilRoot>
      <UserScreenNavigation />
    </RecoilRoot>
  );
};

export default App;
