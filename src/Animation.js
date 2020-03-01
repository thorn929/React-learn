import React, { Component } from 'react';
// import { CSSTransition } from 'react-transition-group'

class Animation extends Component {
    state = {  }
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
    }
    render() { 
        return ( 
            <div>
                <div className={this.state.isShow ? 'show' : 'hide'}>Boss级--战神</div>
                <div><button onClick={() => this.toToggole()}>召唤</button></div>
            </div>
        )
    }

    toToggole() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
}
 
export default Animation;