import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatStartDate} from '../../../utils/formatStartDate';
import {formatFinishDate} from '../../../utils/formatFinishDate';

const OrderSummary = ({tripCost, options, tripDays}) => {

  const startDate = options['start-date'];

  // console.log('trip duration (days):', tripDays);
  // console.log('start date:', formatStartDate(options['start-date']));
  // console.log('parse start date to ms:', Date.parse(startDate));
  // console.log('converse tripDays to ms:', tripDays * 86400000); // zamiana na milisekundy
  // console.log('finish date in ms:', (Date.parse(startDate)) + (tripDays * 86400000));
  // console.log('finish date:', new Date(Date.parse(options['start-date']) + (tripDays * 86400000)).toLocaleDateString());

  return(
    <div>
      <h2 className={styles.component}>
      Total:<strong> {formatPrice(calculateTotal(tripCost, options))}</strong>
      </h2>
      <h4>Trip start: {formatStartDate(startDate)}</h4>
      <h4>Trip finish: {formatFinishDate(startDate, tripDays)}</h4>
    </div>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  tripDays: PropTypes.number,
};

export default OrderSummary;
