import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  constructor(){
    super();
    setInterval(() => this.forceUpdate(), 1000);
  }

  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  };

  static defaultProps = {
    title: 'Happy Hour!',
    promoDescription: 'Its your time! Take advantage of Happy Hour!',
  }

  getCountdownTime() {
    const currentDate = new Date();

    const nextMidday = new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), 12, 0, 0, 0));

    if(currentDate.getUTCHours() >= 12){
      nextMidday.setUTCDate(currentDate.getUTCDate()+1);
    }

    return Math.round((nextMidday.getTime() - currentDate.getTime())/1000);
  }

  render(){
    const { title, promoDescription } = this.props;

    const renderedTime = this.getCountdownTime();
    const SEC_IN_23HOURS = 23*60*60;

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        {/* {(countdownTime > AMOUNT) ?
          (<div className={styles.promoDescription}>{promoDescription}</div>) :
          (<div className={styles.promoDescription}>{this.getCountdownTime()}</div>)
        } */}
        <div className={styles.promoDescription}>{renderedTime > SEC_IN_23HOURS ? promoDescription : renderedTime}</div>

      </div>
    );
  }

}

export default HappyHourAd;
