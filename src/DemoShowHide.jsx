
import { useState } from 'react';
function DemoShowHide() {
  const [isshow, setIsshow] = useState(true)
  const [opacityNum, setOpacityNum] = useState(1)
  const handleShow = () => {
    let opacity = 1;
    const timer = setInterval(() => {
      setOpacityNum(opacity)
      opacity-=0.1;
      if(opacity<=0){clearInterval(timer); setOpacityNum(1)}
    }, 200)
  }
  return (
    <div>
      <h2>组件缓慢隐藏</h2>
      <div style={{opacity: opacityNum}}>加油学习呗（js版本渐渐隐藏）</div>
      <div className={isshow?'':'Text-hide'}>加油学习呗（css版本渐渐隐藏）</div>
      <button onClick={handleShow}>js版本渐渐隐藏</button><em> - </em>
      <button onClick={() => {setIsshow(!isshow)}}>css版本渐渐隐藏</button>
    </div>
  )
}
export default DemoShowHide;