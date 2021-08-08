import { createStore, combineReducers, applyMiddleware } from 'redux';
// 浏览器使用redux插件需要在项目中引入该库
import { composeWithDevTools } from 'redux-devtools-extension'
// 异步方法需要利用middleware的thunk实现, 因为store允许的action只能是object，如果是异步function就要借助thunk
import thunkMiddleware from 'redux-thunk'
import counterReducer from './counterReducer';
import personReducer from './personReducer';

// combineReducers合并多个reducer
const reducer = combineReducers({
    count: counterReducer,
    person: personReducer
})
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))