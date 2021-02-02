import { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import './styles/SearchBox.scss';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng} from 'react-places-autocomplete';
import { updateAddress } from '../actions/addressActions';
import { updateCoordinates } from '../actions/coordinatesActions';

function SearchBox() {
  const address = useSelector(state => state.address);
  const coordinates = useSelector(state => state.coordinates);
  const dispatch = useDispatch();

  const handleSelect = address => {
      geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        dispatch(updateCoordinates(latLng))
        
      })
      .catch(error => console.error('Error', error));
  };  


  return (
        <div className="SearchBox">
                  <PlacesAutocomplete
        value={address}
        onChange={(e) => {
            dispatch(updateAddress(e));
        }}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div key={suggestion.index}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <p>{ JSON.stringify(coordinates) }</p>
        </div>
  );
}

const mapStateToProps = state => ({
    address: state.address
});

export default connect(mapStateToProps, {updateAddress})(SearchBox);