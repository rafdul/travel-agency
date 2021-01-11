import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, chooseDurationFrom, chooseDurationTo, createAddTag, createRemoveTag, regionAddTag, regionRemoveTag} from '../../../redux/filtersRedux';
import {getAllRegions} from '../../../redux/regionsRedux';
import {getAllSubregions} from '../../../redux/subregionsRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
  regions: getAllRegions(state),
  subregions: getAllSubregions(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  durationFrom: value => dispatch(chooseDurationFrom(value)),
  durationTo: value => dispatch(chooseDurationTo(value)),
  addTag: tag => dispatch(createAddTag(tag)),
  removeTag: tag => dispatch(createRemoveTag(tag)),

  regionAddTag: region => dispatch(regionAddTag(region)),
  regionRemoveTag: region => dispatch(regionRemoveTag(region)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
