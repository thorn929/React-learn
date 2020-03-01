import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './style.css'
import TodoItem from './TodoItem'
import Animation from './Animation'

class Todo extends Component {  
    // 在某一时刻 可以自动执行的函数 生命周期 React独有的 
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'thorn',
            list: ['西红柿鸡蛋', '茄子拌面']
        }
    }
    componentWillMount() {
        // axios 写在这里  RN有问题  
    }
    // axios 推荐写这里
    componentDidMount() {
        axios.post("https://web-api.juejin.im/v3/web/wbbr/bgeda")
        .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }
    // 看的时候打开 现在太乱
    // componentWillMount() {
    //     console.log('Willmount ---- 组件 将要 挂载页面的时刻')
    // }

    // componentDidMount() {
    //     console.log('Didmount---- 组件挂载完成')
    // }

    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate')
    //     // 必须有返回值  在render之前执行  如果返回false  就不走render了
    //     return true
    // }

    // componentWillUpdate() {
    //     console.log('在shouldcomponeUpdate之后执行')
    // }

    // componentDidUpdate() {
    //     console.log('在render后执行')
    // }
    // // 组件第一次存在dom中， 函数式不会执行的
    // // 如果已经存在dom中 函数才会执行
    // componentWillReceiveProps() {
    //     console.log('这里在顶层组件是不执行的， 要去子组件才行')
    // }
    render() {
        console.log('render')
        return (
            // 需要用到flex布局时候不需要外面套一层div时候用他
            <Fragment>
                <div> 
                    <label htmlFor='thorn'>增加菜谱：</label>
                    {/* this 下面默认拿不到  一般用bind 和 箭头函数解决 */}
                    {/* <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} /> */}
                    <input 
                        id='thorn' 
                        className='input' 
                        value={this.state.inputValue} 
                        onChange={ e => this.inputChange(e)} 
                        ref = {(input) => {this.input = input}}
                    />
                    <button onClick={() => this.addList()}>增加菜谱</button>
                </div> 
                <ul ref = {(ul) => {this.ul = ul}}>
                    {
                        this.state.list.map((item, index) => {
                            // 如需换行 加括号
                            return (
                                //  <li 
                                //     //  这里得用bind  因为传下标，箭头到底行不行？
                                //         key={index}
                                //         onClick= {this.deleteItem.bind(this, index)}
                                //         // 解析html标签
                                //         dangerouslySetInnerHTML={{__html: item}}
                                //     ></li>
                                /* 当前content为自定义 */
                                <TodoItem 
                                    content={item} 
                                    // avname='波多野结衣'
                                    key={index} 
                                    list={this.state.list}
                                    deleteItem={this.deleteItem.bind(this)}
                                    index={index}
                                />
                            )
                        })
                    }
                </ul>
                <Animation />
            </Fragment>
        )
    }
    deleteItem(index) {
        // 不能操作原数据！！！！！！！！，后期优化造成很大性能障碍
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, ()=> {
            // 放在这个回调就好了
            console.log(this.ul.querySelectorAll('li').length)
        })
        // 这里长度总会少一个 因为 setState是异步还没执行完（虚拟dom没完成），   类似 vue  nextTick
        console.log(this.ul.querySelectorAll('li').length)
    }
    inputChange(e) {
        // 默认拿不到this
        // console.log(this)
        this.setState({
            // inputValue: e.target.value
            inputValue: this.input.value
        })
    }
}

export default Todo

// npm install xxx
// npm install -g xxx
// npm install -save xxx
// npm install -save-dev xxx