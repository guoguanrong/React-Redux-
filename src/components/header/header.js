import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './header.css'

class TopHeader extends Component{
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    goback () {
        window.history.back()
    }
    render () {
        return (
            <div className="common-header">
                <span onClick={this.goback}>
                    <i className="fa fa-angle-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
export default TopHeader
