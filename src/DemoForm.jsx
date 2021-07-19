import React, { useState } from 'react'
function DemoForm() {

  const [ userNname2, setUserName2 ] = useState(123)
  const [ password2, setPassword2 ] = useState(456)

  const userNname1 = React.createRef()
  const password1 = React.createRef()
  const handleSubmit1 = (e) => {
    e.preventDefault(); // 阻止表单提交
    alert(`用户名：${userNname1.current.value}, 密码：${password1.current.value}`)
  }

  const handleSubmit2 = (e) => {
    e.preventDefault(); // 阻止表单提交
    alert(`用户名：${userNname2}, 密码：${password2}`)
  }
  
  return (
    <div>
      <h2>收集表单数据</h2>
      <h3>非受控组件(现用现取)</h3>
      <form action="https://baidu.com" onSubmit={handleSubmit1}>
        <input ref={userNname1} placeholder="用户名" name="userName"/>
        <input ref={password1}  placeholder="密码" type="password" name="password"/>
        <button>登录</button>
      </form>
      <h3>受控组件(onInput变化的时候可控)</h3>
      <form action="https://baidu.com" onSubmit={handleSubmit2}>
        <input value={userNname2} placeholder="用户名" name="userName" onInput={(e) => {setUserName2(e.target.value)}}/>
        <input value={password2} placeholder="密码" type="password" name="password" onInput={(e) => {setPassword2(e.target.value)}}/>
        <button>登录</button>
      </form>
    </div>
  )
}
export default DemoForm;