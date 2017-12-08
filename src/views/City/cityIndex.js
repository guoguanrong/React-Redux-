import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux';
import mapStateToProps from '../../util/mapStateToProps';
import { bindActionCreators } from 'redux';
import TopHeader from './../../components/header/header';
import CurrCity from './../../components/currentCity/currentCityIndex'
import * as userinfoActionsFromOther from '../../actions/userinfo'
import CityList from './../../components/cityList/cityListIndex';
import { CITYNAME } from '../../util/localStorageKey';

class CityIndex extends Component{
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    changeCity = (newCity) => {
        if (newCity == null) {
            return
        }
        const userinfo = this.props.userinfodate
        userinfo.cityName = newCity
        // 更新redux
        this.props.userinfoActions.update(userinfo)
        // 更新 localStorage
        localStorage.setItem(CITYNAME, newCity)
        // 跳转到首页
        console.log(this)
        this.props.history.push('/')
    }
    render () {
        return (
            <div>
                <TopHeader title="选择城市"/>
                <CurrCity cityname={this.props.userinfodate.cityName}/>
                <CityList changeFn={this.changeCity}/>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    // 获取到actions/userinfo传入进来让bindActionCreators包一下就映射到自定义userinfoActions的名字上就可以调用了
    return {
        userinfoActions: bindActionCreators(userinfoActionsFromOther, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityIndex)
