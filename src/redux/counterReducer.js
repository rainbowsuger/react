import { INCREMENT, DECREMENT, ODDINCREMENT } from './constant';
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // 检查 reducer 是否关心这个 action
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        // 使用新值更新 state 副本
        value: state.value + 1
      }
    case DECREMENT:
      return {
        ...state,
        // 使用新值更新 state 副本
        value: state.value - 1
      }
    case ODDINCREMENT:
      if(state.value % 2 === 1) {
        return {
          ...state,
          // 使用新值更新 state 副本
          value: state.value + 1
        }
      } 
      return state;
    default:
      return state
  }
}

export default counterReducer;