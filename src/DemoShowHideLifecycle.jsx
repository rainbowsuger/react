import React from 'react';
import ReactDOM from 'react-dom';

class DemoShowHideLifecycle extends React.Component {
  constructor(props) {
    super(props)
    console.log('0 ====', 'constructor');
    this.state = { isShow:true, opacity: 1, newArr: [] }
    this.timer = null;
    this.list = React.createRef();
  }

  death = () => {
    ReactDOM.unmountComponentAtNode('container')
  }
 
  force = () => {
    // 不走shouldComponentUpdate更新流程
    this.forceUpdate()
  }

  setIsshow = () => {
    let opacity = 1;
    let timer = setInterval(() => {
      opacity -= 0.1;
      if(opacity<=0) {clearInterval(timer); opacity = 1}
      this.setState({opacity})
    }, 200)
  }
  // 必须加static，必须返回状态对象，state的值任何时候都取决于prop用这个钩子 几乎用不到
  static getDerivedStateFromProp() {
    console.log('新生命周期constructor之后 ====', 'getDerivedStateFromProp');
    return null;
  }
  // 组件将要接收prop,第一次不执行，rerender的时候才执行这个钩子
  // 旧版本componentWillReceiveProps，将要弃用
  // UNSAFE_componentWillReceiveProps() {
  //   console.log('父组件rerender的时候 ====', 'componentWillReceiveProps');
  // }
  // 准备加载
  // 旧版本componentWillMount将要弃用
  // UNSAFE_componentWillMount() {
  //   // 添加定时器
  //   let opacity = 1;
  //   this.timer = setInterval(() => {
  //     opacity -= 0.1;
  //     this.setState({opacity})
  //   }, 200)
  //   console.log('1 ======componentWillMount' );
  // }
  // 更新前的快照，传值给componentDidUpdate可以接收到做一些操作,快照
  getSnapshotBeforeUpdate() {
    console.log('3.0 ====getSnapshotBeforeUpdate')
    return this.list.current.scrollHeight;
  }
  // 加载完成
  componentDidMount() {
    this.timer = setInterval(() => {
      const {newArr} = this.state;
      const news = `新闻${newArr.length+1}`
      this.setState({newArr: [news,...newArr]})
    }, 1000)
    console.log('3 ======componentDidMount' );
  }
  // 是否更新的“阀门”
  shouldComponentUpdate() {
    console.log('4 ======shouldComponentUpdates' );
    // 不写的话
    /** 
     * index.js:1 Warning: DemoShowHideLifecycle.shouldComponentUpdate(): 
     * Returned undefined instead of a boolean value. Make sure to return true or false.
     * */
    return true;
  }
  // 准备更新
  // 旧版本componentWillUpdate将要弃用
  // UNSAFE_componentWillUpdate() {
  //   // 清除定时器
  //   clearInterval(this.timer);
  //   console.log('5 ======componentWillUpdate' );
  // }
  // 更新完成
  componentDidUpdate(preProp,preState,snapshot) {
    if(this.state.newArr.length > 49){
      clearInterval(this.timer)
    } else {
      this.list.current.scrollTop += (this.list.current.scrollHeight - snapshot);
    }
    console.log('==============',this.list.current.scrollTop, snapshot)

    console.log('6 ======componentDidUpdate',preProp,preState,snapshot);
  }
  // 准备更新
  componentWillUnmount() {
    console.log('7 ======componentWillUnmount' );
  }

  render() {
    console.log('2 ====', 'render');
    
    return (
      <div>
        <h2>生命周期</h2>
        <div style={{opacity: this.state.opacity}}>组件逐渐隐藏</div>
        <button onClick={this.setIsshow}>开始隐藏</button>
        <em> - </em>
        <button onClick={this.death}>隐藏unmount版本(err)</button>
        <h3>forceUpdate更新看生命周期执行情况</h3>
        <button onClick={this.force}>forceUpdate</button>
        <h3>固定看某条新闻</h3>
        <ul className="container-ul" ref={this.list}>
          {/* 索引值是唯一标识不会 */}
          {this.state.newArr.map((n, index)=> {
            return <div key={index}><li>{n}</li><input/></div>
          })
          }
        </ul>
        <ul className="container-ul">
          {/* 如果输入类input CheckBox等输入了值，索引值是index顺序会有问题 */}
          {this.state.newArr.map((n,index) => {
            return <div key={index}><li>{n}</li><input/></div>
          })
          }
        </ul>
      </div>
    )
  }
}
export default DemoShowHideLifecycle;