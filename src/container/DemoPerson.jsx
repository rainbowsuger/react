import { useRef } from 'react';
import { connect } from 'react-redux';
import {add} from '../redux/actions/person'
import { Button, message } from 'antd';

const DemoPerson = props => {
  const nameRef = useRef('name')
  const ageRef = useRef('age')

  const getInput = () => {
    const name = nameRef.current.value 
    const age = ageRef.current.value 
    if(name && age) {
      props.add({name, age});
      nameRef.current.value = '';
      ageRef.current.value = '';
    } else {
      message.error('请输入姓名和年龄')
    }
  }

  return (
    <div>
      <p>count组件当中的数值为：{props.count.value}</p>
      <hr/>
      <input ref={nameRef} placeholder="请输入名字"/>
      <input ref={ageRef} placeholder="请输入年龄"/>
      <Button onClick={getInput}>添加</Button>
      <ul>
        {
          props.person.map((item, index) => {
            return <li key={index}>我的名字是：{item.name}  我的年龄是: {item.age}</li>
          })
        }
      </ul>

    </div>
  )
}

export default connect(state => state, {
  add
})(DemoPerson);