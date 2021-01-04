import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, chooseDurationFrom, chooseDurationTo} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  chooseDurationFrom: value => dispatch(chooseDurationFrom(value)),
  chooseDurationTo: value => dispatch(chooseDurationTo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
