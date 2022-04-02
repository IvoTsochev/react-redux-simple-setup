import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// create the store
import { createStore } from 'redux';
// importing single file with all reducers
import allReducers from './reducers';
// initilize the provider
import { Provider } from 'react-redux';


const store = createStore(
  // passing all reducers to the store
  allReducers,
  // for using the redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);







ReactDOM.render(
  <React.StrictMode>
    {/* Provide our app with the global store */ }
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
