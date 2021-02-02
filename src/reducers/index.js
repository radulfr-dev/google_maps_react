import { combineReducers } from 'redux';
import addressReducer from './addressReducer';
import coordinatesReducer from './coordinatesReducer';
import markerReducer from './markerReducer';

const allReducers = combineReducers({
    address: addressReducer,
    coordinates: coordinatesReducer,
    defaultCoordinates: { lat: 41.3851, lng: 2.1734 },
    marker: markerReducer
});

export default allReducers;