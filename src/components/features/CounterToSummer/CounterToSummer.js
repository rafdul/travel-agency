import React from 'react';
import PropTypes from 'prop-types';
import styles from './CounterToSummer.scss';


class CounterToSummer extends React.Component {

  static propTypes = {
    title: PropTypes.string,
  }

  static defaultProps = {
    title1: ' days to Summer!',
    title2: ' day to Summer!',
  }

  getCountdownTime() {
    const currentDate = new Date();

    const nextSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));

    if (currentDate.getUTCMonth() === 8 && currentDate.getUTCDate() >= 23 || currentDate.getUTCMonth() >= 9){
      nextSummer.setUTCFullYear(currentDate.getUTCFullYear()+1);
    } else if((currentDate.getUTCMonth() === 5 && currentDate.getUTCDate() > 20 || currentDate.getUTCMonth() >= 6)){
      return 0;
    }

    const MSEC_IN_DAY = 24*60*60*1000;

    return Math.round((nextSummer - currentDate)/MSEC_IN_DAY);
  }

  render(){
    const { title } = this.props;

    return(
      <div className={styles.component}>
        <h2 className={styles.title}>
          <span className={styles.counter}>{this.getCountdownTime()}</span>
          <span className={styles.info}>{title}</span>
        </h2>
      </div>
    );
  }

}

export default CounterToSummer;
