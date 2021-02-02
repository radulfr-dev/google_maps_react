import { withGoogleMap } from 'react-google-maps';
import { MARKER_TOGGLE } from './types';

export function toggleMarker() {
    return {
        type: MARKER_TOGGLE
    }
}