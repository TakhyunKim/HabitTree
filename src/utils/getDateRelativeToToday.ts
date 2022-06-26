/**
 * 오늘 날짜를 기준으로 원하는 Date 객체를 return 해주는 function
 */
const getDateRelativeToToday = (numberOfDaysToMove: number) => {
  const today = new Date();

  return new Date(today.setDate(today.getDate() + numberOfDaysToMove));
};

export default getDateRelativeToToday;
