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

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const chooseDurationFrom = payload => ({payload, type: CHOOSE_DURATION_FROM});
export const chooseDurationTo = payload => ({payload, type: CHOOSE_DURATION_TO});

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
    default:
      return statePart;
  }
}
