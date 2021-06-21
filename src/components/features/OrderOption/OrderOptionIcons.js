import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionIcons = ({required, currentValue, values, setOptionValue}) => (

  <div className={styles.component}>
    {required ? '' : (
      <div
        className={styles.icon}
        value=''
        onClick={() => setOptionValue('')}
      >
        <Icon name="times-circle">
          none
        </Icon>
      </div>
    )}
    {values.map(value => (
      <div
        className={`${styles.icon} ${currentValue == value.id ? styles.iconActive : ''}`}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon}/>
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
