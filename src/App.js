import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { test } from './actions';

function App() {
  const test = useSelector(state => state.test);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{ test }</h1>
    </div>
  );
}

export default App;
