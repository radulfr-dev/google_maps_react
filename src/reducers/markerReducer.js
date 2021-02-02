import { MARKER_DESC, SET_MARKER } from '../actions/types';

export default function(state = { displayed: false, desc: ""}, action){
    switch (action.type) {
        case SET_MARKER:
            console.log('set marker')
            return {
                displayed: true,
                desc: state.desc
            };
        case MARKER_DESC:
            return {
                ...state,
                desc: action.newDesc
            }
        default:
            return state;
    }
};