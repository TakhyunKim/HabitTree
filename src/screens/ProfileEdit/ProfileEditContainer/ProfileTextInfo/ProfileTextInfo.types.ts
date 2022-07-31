import { Dispatch, SetStateAction } from 'react';

export interface ProfileTextInfoProps {
  name: string;
  value: string;
  placeHolder: string;
  onChange: Dispatch<SetStateAction<string>>;
}
