import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, chooseDurationFrom, chooseDurationTo, createAddTag, createRemoveTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  durationFrom: value => dispatch(chooseDurationFrom(value)),
  durationTo: value => dispatch(chooseDurationTo(value)),
  addTag: tag => dispatch(createAddTag(tag)),
  removeTag: tag => dispatch(createRemoveTag(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
