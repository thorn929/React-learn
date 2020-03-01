import React, { Component }  from 'react'

class App extends Component{
    render(){
        return (
            // JSX 
            <ul className='my-list'>
                <li>THron</li>
                <li>Hello React</li>
            </ul>
            // 同等 建议使用 JSX 来编写你的 UI 组件。每个 JSX 元素都是调用 React.createElement() 的语法糖
            // var child1 = React.createElement('li', null, 'Thorn')
            // var child2 = React.createElement('li', null, 'Hello React')
            // var root = React.createElement('ul', {className: 'my-list'}, child1, child2)
        )
    }
}
export default App