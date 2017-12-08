import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './homeHeadStyle.css'
import mapStateToProps from '../../util/mapStateToProps'
import { connect } from 'react-redux'
import { Link, BrowserRouter } from 'react-router-dom'

class HomeHeader extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            kwd: ''
        }
    }
    ChangeHandle(e) {
        const val = e.target.value
        this.setState({
            kwd: val
        })
    }
    KeyUphandle = (e) => {
        if (e.keyCode !== 13) {
            return
        }
        BrowserRouter.push('/search/all')
    }
    render() {
        return (
            <div className="headbox">
                <div className="left-adress">
                    <Link to="/city">
                        <span>{this.props.userinfodate.cityName}</span>
                        <i className="fa fa-angle-down"></i>
                    </Link>
                </div>
                <div className="cen-ipt">
                    <i className="fa fa-search"></i>
                    <input type="text" value={this.state.kwd} onChange={this.ChangeHandle.bind(this)} onKeyUp={this.KeyUphandle} />
                </div>
                <div className="right-ico">
                    <Link to="/login">
                        <i className="fa fa-user-circle-o"></i>
                    </Link>
                </div>
            </div>
        )
    }
}
export default connect(
    mapStateToProps
)(HomeHeader)
