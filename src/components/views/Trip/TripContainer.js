import {connect} from 'react-redux';
import Trip from './Trip';
import {getTripById} from '../../../redux/tripsRedux';
import {getCountryByCode} from '../../../redux/countriesRedux';
import {getRegion} from '../../../redux/regionsRedux';
import {getSubregion} from '../../../redux/subregionsRedux';

const mapStateToProps = (state, props) => {
  const trip = getTripById(state, props.match.params.id);
  const country = getCountryByCode(state, trip.country.code);
  const region = getRegion(state, trip.country.region);
  const subregion = getSubregion(state, trip.country.subregion);

  return {
    ...trip,
    country,
    region,
    subregion,
  };
};

export default connect(mapStateToProps)(Trip);
