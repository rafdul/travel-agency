import React from 'react';
import PropTypes from 'prop-types';
// import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({tripCost, options, setOrderOption, tripDays}) => (

  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption  currentValue={options[option.id]} setOrderOption={setOrderOption} {...option} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} tripDays={tripDays}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripDays: PropTypes.number,
};

export default OrderForm;
