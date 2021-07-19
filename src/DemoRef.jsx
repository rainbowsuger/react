import React, { useRef } from 'react'

function DemoRef({inputRef}) {
  console.log('回调形式inputRef，行内函数，每次update就是执行render的时候 都调用一次  ====', inputRef);

  // useRef是函数当中适用
  const textInput = React.createRef();

  function handleClick() {
    textInput.current.focus();
  }
  return (
    <div>
    <input ref={inputRef}/>
    <input
        type="text"
        ref={textInput} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
    
  )
}
export default DemoRef;
