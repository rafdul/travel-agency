import React from 'react';
import PropTypes from 'prop-types';
import styles from './CounterToSummer.scss';

class CounterToSummer extends React.Component {

  static propTypes = {
    title: PropTypes.string,
  }

  static defaultProps = {
    title: ' days to Summer!',
  }

  getCountdownTime() {
    const currentDate = new Date();

    const nextSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21, 0, 0, 0, 0));

    if((currentDate.getUTCMonth() == 5 && currentDate.getUTCDate() >= 21) || currentDate.getUTCMonth() >= 6){
      nextSummer.setUTCFullYear(currentDate.getUTCFullYear()+1);
    }

    return Math.round((nextSummer - currentDate)/1000/3600/24);
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
