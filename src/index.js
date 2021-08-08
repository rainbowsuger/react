import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Demo from './Demo.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
// Provider根节点注入store，每个用到的组件当中自动会注入，不用一个个传。
import { Provider } from 'react-redux';
import StoreRedux from './redux/index';


ReactDOM.render(
  // 严格模式，检查子组件不合理地方，比如字符串ref
  <React.StrictMode>
    <Provider store={StoreRedux}>
      <Router>
          <Demo />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// 记录性能和测试
reportWebVitals();
