// import all reducers to one file
import counterReducer from './counter';
import loggedReducer from './isLogged';

// combining all reducers below into one
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;