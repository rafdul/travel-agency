/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHOOSE_DURATION_FROM = createActionName('CHOOSE_DURATION_FROM');
export const CHOOSE_DURATION_TO = createActionName('CHOOSE_DURATION_TO');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
// TODO - action types for region
export const REGION_ADD_TAG = createActionName('REGION_ADD_TAG');
export const REGION_REMOVE_TAG = createActionName('REGION_REMOVE_TAG');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const chooseDurationFrom = payload => ({payload, type: CHOOSE_DURATION_FROM});
export const chooseDurationTo = payload => ({payload, type: CHOOSE_DURATION_TO});
export const createAddTag = payload => ({payload, type: ADD_TAG});
export const createRemoveTag = payload => ({payload, type: REMOVE_TAG});
// TODO - action for region
export const regionAddTag = payload => ({payload, type: REGION_ADD_TAG});
export const regionRemoveTag = payload => ({payload, type: REGION_REMOVE_TAG});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHOOSE_DURATION_FROM:
      return {
        ...statePart,
        duration: {...statePart.duration, from: action.payload},
      };
    case CHOOSE_DURATION_TO:
      return {
        ...statePart,
        duration: {...statePart.duration, to: action.payload},
      };
    case ADD_TAG:
      return {
        ...statePart,
        // tags: action.payload,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        // tags: action.payload,
        tags: [...statePart.tags.filter((tag) => tag !== action.payload)],
      };
    //TODO - reducers for regions
    case REGION_ADD_TAG:
      return {
        ...statePart,
        regions: [...statePart.regions, action.payload],
      };
    case REGION_REMOVE_TAG:
      return {
        ...statePart,
        regions: [...statePart.regions.filter((region) => region !== action.payload)],
      };
    default:
      return statePart;
  }
}
