import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';
// import PropTypes from 'prop-types';

const OrderOptionDate = () => {

  const [startDate, setStartDate] = useState(null);

  return (
    <DatePicker
      type="date"
      className={styles.input}
      selected={startDate}
      onChange={date => setStartDate(date)}
      isClearable
      placeholderText="dd/mm/yyyy"
      dateFormat="dd/MM/yyyy"
      minDate={new Date()}
      showDisabledMonthNavigation
      withPortal
    />
  );
};

// OrderOptionDate.PropTypes = {
//
// };

export default OrderOptionDate;
