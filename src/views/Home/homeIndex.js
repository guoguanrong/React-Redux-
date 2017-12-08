import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/homeHeader/homeHeadIndex'
import SwiperIndex from '../../components/swiperNav/swiperIndex'
import Sublist from './subpage/list'

class HomeIndex extends Component{
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render () {
        return (
            <div>
                <HomeHeader/>
                <SwiperIndex/>
                <div style={{height: '25px'}}></div>
                <p style={{fontSize: '18px'}}>猜你喜欢</p>
                <img src={require('../../images/chaozhi.png')} style={{width: '100%'}}/>
                <Sublist/>
            </div>
        )
    }
}

// state.userinfo获取reducer/index.js下面的userinfo
// function mapStateToProps(state) {
//     return {
//         userinfo: state.userinfo
//     }
// }

export default HomeIndex
