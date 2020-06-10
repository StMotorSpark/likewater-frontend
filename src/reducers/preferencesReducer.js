import { SET_DEFAULT_POSITION, SET_EVENT_FILTER } from "../actions";

const INITIAL_STATE = {
  defaultPosition: JSON.parse(localStorage.getItem(SET_DEFAULT_POSITION)) ?? [
    -74.0,
    40.73,
  ],
  eventFilter: [],
  showBasicMapFeatures: true,
  showVolumetricBuildings: true,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_DEFAULT_POSITION:
      return {
        ...state,
        defaultPosition: payload,
      };
    case SET_EVENT_FILTER:
      return {
        ...state,
        eventFilter: payload,
      };
    default:
      return state;
  }
};
