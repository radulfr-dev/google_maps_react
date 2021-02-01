import { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import './styles/SearchBox.scss';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng} from 'react-places-autocomplete';
import { updateAddress } from '../actions/addressActions';

function SearchBox() {
  const address = useSelector(state => state.address);
  const dispatch = useDispatch();

  console.log(address);

  return (
        <div className="SearchBox">
            <form>
                <input onChange={ (e) => {
                    dispatch(updateAddress(e.target.value))
                } } placeholder="Tu busqueda aquí..." />
                <button>Go!</button>
            </form>
            <h1>{ address }</h1>
        </div>
  );
}

const mapStateToProps = state => ({
    address: state.address.test
});

export default connect(mapStateToProps, {updateAddress})(SearchBox);