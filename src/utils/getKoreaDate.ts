const getKoreaDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month < 10 ? `0${month}` : month}월 ${day}일`;
};

export default getKoreaDate;
