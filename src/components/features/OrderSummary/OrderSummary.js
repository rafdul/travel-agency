import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatDate} from '../../../utils/formatDate';

const OrderSummary = ({tripCost, options}) => {

  console.log('Date', options['start-date']);

  return(
    <div>
      <h2 className={styles.component}>
      Total:<strong> {formatPrice(calculateTotal(tripCost, options))}</strong>
      </h2>
      <h4>Trip start: {formatDate(options['start-date'])}</h4>
      {/* <p>Trip finish:</p> */}
    </div>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
