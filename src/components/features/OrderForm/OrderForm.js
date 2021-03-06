import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';

const sendOrder = (options, tripCost, tripName, tripId, countryCode, tripDays) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    countryCode,
    tripDays,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  if(options.name !== '' && options.contact !== '' && options['start-date']) {
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      })
      .then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    return alert('Fields: "Name", "Contact" and "Preffered trip start" are necessary!');
  }
};

const OrderForm = ({tripCost, options, setOrderOption, tripDays, tripName, tripId, countryCode}) => (

  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption  currentValue={options[option.id]} setOrderOption={setOrderOption} {...option} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} tripDays={tripDays}/>
    </Col>
    <div className={styles.component}>
      <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, countryCode, tripDays)}>Order now!</Button>
    </div>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripDays: PropTypes.number,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;
