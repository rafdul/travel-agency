import React from 'react';
import styles from './Phones.scss';
import PropTypes from 'prop-types';

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

const Phones = ({ phone1='678.243.8455', phone2='278.443.6443', phone3='167.280.3970', info='The Office opens at 8 UTC' }) => (

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
