import { DateInfo } from '../types';
const getWeek = (): DateInfo => {
  const today = new Date();
  const first = today.getDate() - today.getDay() + 1;

  const monday = new Date(new Date().setDate(first));
  const tuesday = new Date(new Date().setDate(first + 1));
  const wednesday = new Date(new Date().setDate(first + 2));
  const thursday = new Date(new Date().setDate(first + 3));
  const friday = new Date(new Date().setDate(first + 4));
  const saturday = new Date(new Date().setDate(first + 6));
  const sunday = new Date(new Date().setDate(first + 7));

  const dateInfo: DateInfo = {
    월: monday,
    화: tuesday,
    수: wednesday,
    목: thursday,
    금: friday,
    토: saturday,
    일: sunday,
  };

  return dateInfo;
};

export default getWeek;
