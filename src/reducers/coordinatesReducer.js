import { UPDATE_COORDINATES } from '../actions/types';

export default function(state = { lat: 41.3851, lng: 2.1734 }, action){
  switch (action.type) {
    case UPDATE_COORDINATES:
      return action.newCoordinates;
    default:
      return state;
  }
};
