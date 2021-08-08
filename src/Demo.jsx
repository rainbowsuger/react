import React, { useState, useEffect } from 'react';
import { useMount, useDebouce } from './cusEffect';
import { Button } from 'antd';
import './Demo.css';
import DemoSearch from './DemoSearch.jsx'
import DemoList from './DemoList.jsx'
import DemoRef from './DemoRef.jsx'
import DemoForm from './DemoForm.jsx';
import DemoShowHide from './DemoShowHide.jsx';
import DemoShowHideLifecycle from './DemoShowHideLifecycle.jsx';
import DemoReduxCount from './container/DemoCount.jsx';
import DemoReduxPerson from './container/DemoPerson.jsx';
import DemoFomily from './DemoFomily.jsx';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
function Demo() {
  const [params, setParams] = useState({
    name: '',
    id: 0
  })
  const [list, setList] = useState([]);
  const debouceParams = useDebouce(params, 2000)
  
  // 检测store变化刷新页面
  useEffect(() => {
    console.log('防抖操作结束之后触发' );
    // StoreRedux.subscribe(() => {
    //   setStore({})
    // })
    setList([{
          name: '负责人',
          id: 0
        },{
          name: '郝婵婵',
          id: 1
        },{
          name: '胡洋洋',
          id: 2
        },{
          name: '张渊源',
          id: 3
        }])
  }, [debouceParams])

  useMount(() => {
    console.log('只执行一次 ====');
  })
  return (
    <div className="block">
      <h1>React task</h1>
      <Button type="primary">antd测试</Button>
      <div className="block-content">
        <ul className="content-nav">
          <li>
            <NavLink activeClassName="nav-link-active" to="/DemoSearch" className="content-nav-link">DemoSearch</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-link-active" to="/DemoList" className="content-nav-link">DemoList</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-link-active" to="/DemoRef" className="content-nav-link">DemoRef</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-link-active" to="/DemoForm" className="content-nav-link">DemoForm</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-link-active" to="/DemoShowHide" className="content-nav-link">DemoShowHide</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-link-active" to="/DemoShowHideLifecycle" className="content-nav-link">DemoShowHideLifecycle</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-link-active" to="/DemoReduxCount" className="content-nav-link">DemoReduxCount</NavLink>
            <NavLink activeClassName="nav-link-active" to="/DemoReduxPerson" className="content-nav-link">DemoReduxPerson</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-link-active" to="/DemoFomily" className="content-nav-link">DemoFomily</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path='/DemoSearch'>
            <DemoSearch params={params} setParams={setParams}></DemoSearch>
          </Route>
          <Route exact path="/DemoList" render={() => (
            <DemoList list={list} setList={setList}></DemoList>
          )}/>
          <Route path='/DemoRef'>
            <DemoRef inputRef={() => {console.log('我是ref,我执行了多少次？')}}></DemoRef>
          </Route>
          {/** 收集表单数据 */}
          <Route path='/DemoForm' component={DemoForm}/>
          { /** 逐渐隐藏 */}
          <Route path='/DemoShowHide' component={DemoShowHide}/>
          { /** 生命周期 exact精确匹配 */}
          <Route exact path='/DemoShowHideLifecycle'>
            <DemoShowHideLifecycle name="DemoShowHideLifecycle"></DemoShowHideLifecycle>
          </Route>
          <Route exact path='/DemoReduxCount'>
            <DemoReduxCount></DemoReduxCount>
          </Route>
          <Route exact path='/DemoReduxPerson'>
            <DemoReduxPerson></DemoReduxPerson>
          </Route>
          <Route exact path='/DemoFomily' component={DemoFomily}></Route>
          <Route path='/404'>
            <h1>抱歉，您的页面找不到。</h1>
          </Route>
          <Redirect to='/404'></Redirect>
        </Switch>
      </div>
    </div>
  )
}
export default Demo;