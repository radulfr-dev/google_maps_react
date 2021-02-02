import { combineReducers } from 'redux';
import addressReducer from './addressReducer';
import coordinatesReducer from './coordinatesReducer';

const allReducers = combineReducers({
    address: addressReducer,
    coordinates: coordinatesReducer
});

export default allReducers;