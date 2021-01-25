import React from 'react';
import styles from './Phones.scss';
import PropTypes from 'prop-types';
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

const Phones = ({ phone1=settings.phone.nr1, phone2=settings.phone.nr2, phone3=settings.phone.nr3, info=settings.phone.info }) => (

  <span className={styles.component}>
    {choosePhone(phone1, phone2, phone3, info)}
  </span>

);

Phones.propTypes = {
  phone1: PropTypes.string,
  phone2: PropTypes.string,
  phone3: PropTypes.string,
  info: PropTypes.string,
};

export default Phones;
