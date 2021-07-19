import { useState, useEffect } from 'react';
import { useMount, useDebouce } from './cusEffect';
import './Demo.css';
import DemoSearch from './DemoSearch.jsx'
import DemoList from './DemoList.jsx'
import DemoRef from './DemoRef.jsx'
import DemoForm from './DemoForm.jsx';
function Demo() {
  const [params, setParams] = useState({
    name: '',
    id: 0
  })
  const [list, setList] = useState([]);
  const debouceParams = useDebouce(params, 2000)
  
  useEffect(() => {
    console.log('防抖操作结束之后触发' );
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
      <h1>hook task</h1>
      <DemoSearch params={params} setParams={setParams}></DemoSearch>
      <DemoList list={list} setList={setList}></DemoList>
      <h2>内联函数，每次update就是执行render的时候 都调用一次</h2>
      { /** 内联函数，每次update就是执行render的时候 都调用一次 **/ }
      <DemoRef inputRef={() => {console.log('我是ref,我执行了多少次？')}}></DemoRef>
      { /** 收集表单数据 */}
      <DemoForm></DemoForm>
    </div>
  )
}
export default Demo;