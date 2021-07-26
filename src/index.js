import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Demo from './Demo.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  // 严格模式，检查子组件不合理地方，比如字符串ref
  <React.StrictMode>
    <Router>
      <Demo />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// 记录性能和测试
reportWebVitals();
