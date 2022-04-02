// reducers are like state in the store
// and describe what it should be done with the state
const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return !state;
    default:
      return state;
  }
}

export default loggedReducer;