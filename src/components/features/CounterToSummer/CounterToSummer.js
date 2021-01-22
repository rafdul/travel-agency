import React from 'react';
import PropTypes from 'prop-types';
import styles from './CounterToSummer.scss';

class CounterToSummer extends React.Component {

  static propTypes = {
    title: PropTypes.string,
  }

  static defaultProps = {
    title: '200 dni do lata!',
  }

  render(){
    const { title } = this.props;

    return(
      <div className={styles.component}>
        <h2 className={styles.info}>{title}</h2>
      </div>
    );
  }

}

export default CounterToSummer;
