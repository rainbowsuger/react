import { useState } from 'react';
import { Input, Select, Form } from 'antd';
const { Option } = Select;
function DemoSearch (props) {
  const {params, setParams} = props;
  console.log(props)
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
    <Form>
      <Form.Item>
        <Input placeholder="项目名称" value={params.name} onChange={(e) => {setParams({...params, name: e.target.value})}}/>
      </Form.Item>
      <Form.Item>
        <Select value={params.id} onChange={(val) => { setParams({...params, id: val});}}>
          {users.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
        </Select>
      </Form.Item>
    </Form>
  )
}
  
export default DemoSearch;
