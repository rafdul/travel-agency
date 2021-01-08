import React from 'react';
import PropTypes from 'prop-types';


const OrderOptionCheckboxes = ({name}) => (

  <div>{name}</div>
);

OrderOptionCheckboxes.propTypes = {
  name: PropTypes.string,
};

export default OrderOptionCheckboxes;
