import { combineReducers } from 'redux';
import addressReducer from './addressReducer';

const allReducers = combineReducers({
    address: addressReducer
});

export default allReducers;