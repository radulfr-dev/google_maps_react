import { MARKER_DESC } from '../actions/types';
import { markerDesc } from '../actions/markerActions';

describe('Marker actions', () => {
    it('should create an action with the new description', () => {
        const newDescription = "Test description";
        const expectedAction = {
            type: MARKER_DESC,
            newDesc: newDescription
        };
        expect(markerDesc(newDescription)).toEqual(expectedAction);
    })
})