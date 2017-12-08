import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Login extends Component{
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render () {
        return (
            <div>
                <h1>Login页面</h1>
            </div>
        )
    }
}
export default Login
