import React from 'react';
// import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {

  render(){
    return (
      <div className={styles.component}>
        <p>Happy Hour</p>
        <p>Time</p>
      </div>
    );
  }

}

export default HappyHourAd;
