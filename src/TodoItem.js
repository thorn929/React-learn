import React, { Component } from 'react';
// 这里单独引入 类型校验
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        console.log('child-render')
        return ( 
        <li onClick={this.handleClick}>{this.props.avname} 为你服务：{this.props.content}</li>
        );
    }
    handleClick() {
        // this.props.list = []
        this.props.deleteItem(this.props.index)
    } 
    // 这里非常非常有用！！！！！！ 比如我父组件输入框 输入会自动调用子组件出发render，加上就不会了
    shouldComponentUpdate(nextProps, nextState) {
        // 检测到数据变化才能render  ！！！  优化 这里很重要
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }
    // 组件第一次存在dom中， 函数式不会执行的
    // 如果已经存在dom中 函数才会执行
    componentWillReceiveProps() {
        console.log('这里在顶层组件是不执行的， 要去子组件才行')
    }
    componentWillUnmount() {
        console.log('child - componentWillunmoutn, 组件被删除之前执行')
    }
}
// 注意  这里的propsTypes 是小写啊  不是上面写的大写
TodoItem.propTypes = {
    avname: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}
// 默认值
TodoItem.defaultProps = {
    avname: '松岛枫'
}


export default TodoItem; 