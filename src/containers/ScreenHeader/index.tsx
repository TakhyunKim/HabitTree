import React from 'react';

import { ScreenHeader as ScreenHeaderComponent } from '../../components';

import { ScreenHeaderProps } from './ScreenHeader.types';

const ScreenHeader = ({ headerTitle }: ScreenHeaderProps) => {
  return <ScreenHeaderComponent headerTitle={headerTitle} />;
};

export default ScreenHeader;
