import { MARKER_TOGGLE } from '../actions/types';

export default function(state = false, action){
    switch (action.type) {
        case MARKER_TOGGLE:
            return !state;
        default:
            return state;
    }
};