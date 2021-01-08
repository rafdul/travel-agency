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
      {pricing.map(variant => (
        <Col md={4} key={variant.id}>
          <OrderOption  currentValue={options[variant.id]} setOrderOption={setOrderOption} {...variant} />
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
