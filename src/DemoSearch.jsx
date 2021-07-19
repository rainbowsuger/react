import { useState } from 'react';
function DemoSearch ({params, setParams}) {
  const [ users ] = useState([
    {
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
  return (
    <div>
      <input placeholder="项目名称" value={params.name} onChange={(e) => {setParams({...params, name: e.target.value})}}/>
      <select value={params.id} onChange={(e) => { setParams({...params, id: e.target.value});}}>
        {users.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
      </select>
    </div>
  )
}
  
export default DemoSearch;
