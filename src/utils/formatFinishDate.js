// export const formatFinishDate = (date, tripDays) => {
//   const MILISECUND_IN_DAYS = 86400000;
//   const theDate = new Date(Date.parse(date) + (tripDays * MILISECUND_IN_DAYS)).toLocaleDateString();
//   if(theDate == 'Invalid Date') {
//     return('');
//   } else {
//     return theDate;
//   }
// };


/* parsowanie nie jest konieczne, więc można trochę krócej zapisać */
export const formatFinishDate = (date, tripDays) => {
  if(date) {
    const newDate = date;
    newDate.setDate(newDate.getDate() + tripDays);
    return newDate.toLocaleDateString();
  } else {
    return '';
  }
};

