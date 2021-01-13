export const formatFinishDate = (date, tripDays) => {
  const theDate = new Date(Date.parse(date) + (tripDays * 86400000)).toLocaleDateString();
  if(theDate == 'Invalid Date') {
    return('');
  } else {
    return theDate;
  }
};

// tripDays * 86400000 = zamiana długości wycieczki w dniach na milisekundy
