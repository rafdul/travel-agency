// export const formatStartDate = date => {
//   const theDate = new Date(Date.parse(date)).toLocaleDateString();
//   if(theDate == 'Invalid Date') {
//     return('');
//   } else {
//     return theDate;
//   }
// };

/* prostszy zapis: parsowanie nie jest konieczne, bo data od razu jest w stringu */
/* javascript przy spójniku && nie spradza drugiego warunku, jeśli pierwszy jest fałszywy */
export const formatStartDate = date => {
  return date && date.toLocaleDateString();
};
