import { UPDATE_ADDRESS } from '../actions/types';

export default function(state = "", action){
  switch (action.type) {
    case UPDATE_ADDRESS:
      return action.newAddress;
    default:
      return state;
  }
};
