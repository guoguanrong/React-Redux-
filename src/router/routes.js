import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { CITYNAME } from '../util/localStorageKey';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userinfoActionsFromOther from '../actions/userinfo'
import mapStateToProps from '../util/mapStateToProps'

import NotFound from './../views/404';
import HomeIndex from './../views/Home/homeIndex';
import CityIndex from './../views/City/cityIndex';
import Search from './../views/Search/searchIndex';
import Login from './../views/Login/loginIndex';


class Routes extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false // 组件加载完显示组件否则为loading
        }
    }
    render() {
        return (
            <Router>
                {
                    this.state.initDone
                    ?
                    <div>
                        <Switch>
                            <Route exact path="/" component={HomeIndex} />
                            <Route path="/city" component={CityIndex} />
                            <Route path="/search/:caregory" component={Search}/>
                            <Route path='/Login' component={Login}/>
                            <Route component={NotFound} />
                        </Switch>
                        {this.props.children}
                    </div>
                    :
                    <h1>加载中...</h1>
                }
            </Router>
        )
    }
    componentDidMount () {
        // 模拟ajax请求数据
        let cityName = localStorage.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '北京'
        }
        // 把城市存到redux中
        this.props.userinfoActions.update({
            cityName: cityName
        })
        // 组件加载完成之后loading隐藏
        setTimeout(() => {
            this.setState({
                initDone: true
            })
            // console.log(this.props.userinfodate)
        }, 1000);
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
)(Routes)
