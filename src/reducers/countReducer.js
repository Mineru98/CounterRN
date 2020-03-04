import types from '../actions/types'

const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT: 
      return {
        count: state.count + 1
      }
    case types.DECREMENT: 
      return {
        count: state.count - 1
      }
  }
  return state;
}

// Exports Default
export default reducer;