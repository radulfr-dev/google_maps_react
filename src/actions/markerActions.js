import { withGoogleMap } from 'react-google-maps';
import { MARKER_DESC, SET_MARKER } from './types';

export function setMarker() {
    return {
        type: SET_MARKER
    }
}

export function markerDesc(newDesc) {
    return {
        type: MARKER_DESC,
        newDesc
    }
}