import React from 'react'
import { Button } from 'antd';

function DemoRef({inputRef}) {
  console.log('回调形式inputRef，行内函数，每次update就是执行render的时候 都调用一次  ====', inputRef);

  // useRef是函数当中适用
  const textInput = React.createRef();

  function handleClick() {
    textInput.current.focus();
  }
  return (
    <div>
    <h2>内联函数，每次update就是执行render的时候 都调用一次</h2>
    <input ref={inputRef}/>
    <input
        type="text"
        ref={textInput} />
      <Button
        type="primary"
        onClick={handleClick}
      >Focus the text input</Button>
    </div>
    
  )
}
export default DemoRef;
