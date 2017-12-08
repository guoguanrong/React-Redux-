import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import mapStateToProps from '../../../util/mapStateToProps'
import { connect } from 'react-redux';

class SubList extends Component{
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render () {
        return (
            <div>
                <h1>{this.props.userinfodate.cityName}</h1>
            </div>
        )
    }
}
export default connect(
    mapStateToProps
)(SubList)
