import { connect } from 'react-redux';
import { increment, decrement, incrementAsync, oddIncrement } from '../redux/actions/counter'

import { Button } from 'antd';

const Count = (props) => {
    console.log(props)
  return (
    <div>
      <span>{props.count.value || 0}</span>
      <Button onClick={() => {props.increment(props.count.value*1)}}>点击加一</Button>
      <Button onClick={() => {props.decrement(props.count.value*1)}}>点击减一</Button>
      <Button onClick={() => {props.oddIncrement(props.count.value*1)}}>奇数加一</Button>
      <Button onClick={() => {props.incrementAsync(props.count.value*1, 1000)}}>异步加一</Button>
      <hr/>
      <p>Person组件中数据是:</p>
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
    increment,
    decrement,
    incrementAsync,
    oddIncrement,
}
)(Count)