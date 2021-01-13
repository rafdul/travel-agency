
export const formatStartDate = date => {
  const theDate = new Date(Date.parse(date)).toLocaleDateString();
  if(theDate == 'Invalid Date') {
    return('');
  } else {
    return theDate;
  }
};
