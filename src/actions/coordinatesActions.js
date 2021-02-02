import { UPDATE_COORDINATES } from './types';

export function updateCoordinates(newCoordinates) {
    return {
        type: UPDATE_COORDINATES,
        newCoordinates
    }
}