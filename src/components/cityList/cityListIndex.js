import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './cityListIndex.css'

class CityList extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    clickHandle (newCity) {
        console.log(newCity)
        const changeFn = this.props.changeFn
        changeFn(newCity)
    }
    render() {
        return (
            <div className="citylistbox">
                <h2>城市列表</h2>
                <ul>
                    <li onClick={this.clickHandle.bind(this, '北京')}>北京</li>
                    <li onClick={this.clickHandle.bind(this, '上海')}>上海</li>
                    <li onClick={this.clickHandle.bind(this, '广州')}>广州</li>
                    <li onClick={this.clickHandle.bind(this, '山西')}>山西</li>
                    <li onClick={this.clickHandle.bind(this, '天津')}>天津</li>
                    <li onClick={this.clickHandle.bind(this, '河北')}>河北</li>
                </ul>
            </div>
        )
    }
}
export default CityList
