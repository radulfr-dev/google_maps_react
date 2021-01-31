import { useSelector, useDispatch } from 'react-redux';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import SearchBox from './SearchBox';

function UnwrappedMap() {
    return (
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{ lat: 0.0, lng: 0.0 }}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(UnwrappedMap));

function Map() {
  const test = useSelector(state => state.test);
  const dispatch = useDispatch();

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

export default Map;