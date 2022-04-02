// actions are like event handlers
// or triggering the reducers(states)
// the actions are called with a dispatch function
export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const multiply = (num) => {
  return {
    type: 'MULTIPLY',
    payload: num
  }
}