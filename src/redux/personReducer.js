import { ADD } from './constant'
const initialState = [{ name: '郝婵婵', age: 25 }]

function personReducer(state = initialState, action) {
  // 检查 reducer 是否关心这个 action
  switch (action.type) {
    case ADD:
      return [...state, action.data]
   default:
    return state
  }
}

export default personReducer;