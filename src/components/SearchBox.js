import { useSelector, useDispatch } from 'react-redux';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import './styles/SearchBox.scss';

function UnwrappedMap() {
    return (
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{ lat: 41.390205, lng: 2.154007 }}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(UnwrappedMap));

function Map() {
  const test = useSelector(state => state.test);
  const dispatch = useDispatch();

  return (
        <div className="SearchBox">
            <form>
                <input placeholder="Tu busqueda aquí..." />
                <button>Go!</button>
            </form>
        </div>
  );
}

export default Map;