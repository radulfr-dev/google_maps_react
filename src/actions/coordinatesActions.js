import { UPDATE_COORDINATES } from './types';

export function updateCoordinates(newCoordinates) {
    console.log('Getting passed to updateCoordinates');
    console.log(newCoordinates);
    console.log('Type from coordinates actions');
    console.log(UPDATE_COORDINATES);
    return {
        type: UPDATE_COORDINATES,
        newCoordinates
    }
}