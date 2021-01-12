import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';


const OrderOptionDate = ({currentValue, setOptionValue}) => {

  return (
    <DatePicker
      type="date"
      className={styles.input}
      selected={currentValue}
      onChange={date => setOptionValue(date)}
      isClearable
      placeholderText="dd.mm.yyyy"
      dateFormat="dd.MM.yyyy"
      minDate={new Date()}
      showDisabledMonthNavigation
    />
  );
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
