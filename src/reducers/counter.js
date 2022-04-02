// reducers are like state in the store
// and describe what it should be done with the state
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'MULTIPLY':
      return state * action.payload;
    default:
      return state;
  }
}

export default counterReducer;