import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { test } from './actions';
import Map from './components/Map';

function App() {
  const test = useSelector(state => state.test);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
