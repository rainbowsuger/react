import { Button } from 'antd';
import Store from './redux/index';

function Count() {
  console.log('store', Store)
  const incretion = () => {
    Store.dispatch({type: 'counter/increment'})
  }
  return (
    <div>
      <span>{Store.getState().value}</span>
      <Button onClick={incretion}>点击加一</Button>
    </div>
  )
}

export default Count;