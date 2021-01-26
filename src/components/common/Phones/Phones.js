import React from 'react';
import styles from './Phones.scss';
// import PropTypes from 'prop-types';
import settings from '../../../data/settings';

const choosePhone = (number1, number2, number3, number4) => {
  let hourUTC = (new Date).getUTCHours();
  // let hourUTC = 8;
  console.log(hourUTC);
  if(hourUTC >= 8 && hourUTC < 12) {
    return number1;
  } else if(hourUTC >= 12 && hourUTC < 16) {
    return number2;
  } else if(hourUTC >= 16 && hourUTC < 22) {
    return number3;
  } else {
    return number4;
  }
};

const phone1 = settings.phone.nr1;
const phone2 = settings.phone.nr2;
const phone3 = settings.phone.nr3;
const info = settings.phone.info;

const Phones = () => (

  <span className={styles.component}>
    {choosePhone(phone1, phone2, phone3, info)}
  </span>

);

export default Phones;
