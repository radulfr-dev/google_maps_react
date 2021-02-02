import { useSelector, useDispatch, connect } from 'react-redux';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import SearchBox from './SearchBox';
import { updateCoordinates } from '../actions/coordinatesActions';

function UnwrappedMap() {
  const coordinates = useSelector(state => state.coordinates);

    return (
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{ lat: 41.3851, lng: 2.1734 }}
            center={coordinates}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(UnwrappedMap));

function Map() {
  const coordinates = useSelector(state => state.coordinates);

  return (
    <div className="Map" style={{ width: '100vw', height: '100vh' }}>
        <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDCOXeLcJz5RdKVWs5GEK79BzFtYRHoCBA`} 
        loadingElement={ <div style={{ height: '100%' }} /> }
        containerElement={ <div style={{ height: '100%' }} /> }
        mapElement={ <div style={{ height: '100%' }} /> }

        />
        <SearchBox />
        
    </div>
  );
}

const mapStateToProps = state => ({
  coordinates: state.coordinates
});

export default connect(mapStateToProps, { updateCoordinates })(Map);