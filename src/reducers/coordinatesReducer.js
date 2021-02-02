import { UPDATE_COORDINATES } from '../actions/types';

export default function(state = { lat: 41.3851, lng: 2.1734 }, action){
     console.log('Action type and const from types');
     console.log(action.type);
     console.log(UPDATE_COORDINATES);
  switch (action.type) {
    case UPDATE_COORDINATES:
        console.log('Getting passed to coordinates reducer');
        console.log(action.newCoordinates);
      return action.newCoordinates;
    default:
      return state;
  }
};
