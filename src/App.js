import { useSelector, useDispatch } from 'react-redux';
// importing the actions
import { increment, decrement, multiply } from './actions';


function App () {

  // useSelector is a hook that allows us to access the state
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  // dispatch is used to call the reducers
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Helloooo</h1>
      <h1>Counter { counter }</h1>
      <button onClick={ () => dispatch(increment()) }>+</button>
      <button onClick={ () => dispatch(decrement()) }>-</button>
      <button onClick={ () => dispatch(multiply(2)) }>*</button>




      { isLogged ? <h3>Valuable information I shouldn't see</h3> : '' }

    </div>
  );
}

export default App;
