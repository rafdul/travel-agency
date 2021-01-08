import React from 'react';
import PropTypes from 'prop-types';
// import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({tripCost, options, setOrderOption}) => (

  <Row>
    <div>
      {pricing.map(option => (
        <Col md={12} key={option.id}>
          <OrderOption  currentValue={options[option.id]} setOrderOption={setOrderOption} {...option} />
        </Col>
      ))}
    </div>
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.object,
};

export default OrderForm;
