import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './currentCityIndex.css'

class CurrCity extends Component{
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render () {
        return (
            <div className="citybox">
                <p>{this.props.cityname}</p>
            </div>
        )
    }
}
export default CurrCity
