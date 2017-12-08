import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './swiperStyle.css'
// 引入swiper组件
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router-dom';

class SwiperIndex extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        let option = {
            auto: 2500,
            callback: (index) => {
                this.setState({
                    index: index
                })
            }
        }
        return (
            <div className="swiperbox">
                <ReactSwipe className="carousel" swipeOptions={option}>
                    <div>
                        <ul>
                            <Link to="/search/jiazhengqq">
                                <li>
                                    <i className="fa fa-grav"></i>
                                    <span>家政</span>
                                </li>
                            </Link>
                            <Link to="/search/szhengqq">
                                <li>
                                    <i className="fa fa-cab"></i>
                                    <span>购物</span>
                                </li>
                            </Link>
                            <Link to="/search/asfengqq">
                                <li>
                                    <i className="fa fa-beer"></i>
                                    <span>家电</span>
                                </li>
                            </Link>
                            <Link to="/search/ghengqq">
                                <li>
                                    <i className="fa fa-child"></i>
                                    <span>家政</span>
                                </li>
                            </Link>
                            <Link to="/search/jiagengqq">
                                <li>
                                    <i className="fa fa-cloud"></i>
                                    <span>云存</span>
                                </li>
                            </Link>
                            <Link to="/search/jiaqzhengqq">
                                <li>
                                    <i className="fa fa-coffee"></i>
                                    <span>饮品</span>
                                </li>
                            </Link>
                            <Link to="/search/jiazhggngqq">
                                <li>
                                    <i className="fa fa-eye"></i>
                                    <span>视野</span>
                                </li>
                            </Link>
                            <Link to="/search/jiazqwegqq">
                                <li>
                                    <i className="fa fa-gamepad"></i>
                                    <span>游戏</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Link to="/search/jiazheng">
                                <li>
                                    <i className="fa fa-heartbeat"></i>
                                    <span>家政</span>
                                </li>
                            </Link>
                            <Link to="/search/gouwu">
                                <li>
                                    <i className="fa fa-cab"></i>
                                    <span>购物</span>
                                </li>
                            </Link>
                            <Link to="/search/jiadian">
                                <li>
                                    <i className="fa fa-beer"></i>
                                    <span>家电</span>
                                </li>
                            </Link>
                            <Link to="/search/buzhidao">
                                <li>
                                    <i className="fa fa-deaf"></i>
                                    <span>家政</span>
                                </li>
                            </Link>
                            <Link to="/search/yuncun">
                                <li>
                                    <i className="fa fa-cloud"></i>
                                    <span>云存</span>
                                </li>
                            </Link>
                            <Link to="/search/yinpin">
                                <li>
                                    <i className="fa fa-coffee"></i>
                                    <span>饮品</span>
                                </li>
                            </Link>
                            <Link to="/search/shiye">
                                <li>
                                    <i className="fa fa-eye"></i>
                                    <span>视野</span>
                                </li>
                            </Link>
                            <Link to="/search/youxi">
                                <li>
                                    <i className="fa fa-gamepad"></i>
                                    <span>游戏</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Link to="/search/buzhdiaoa">
                                <li>
                                    <i className="fa fa-bell"></i>
                                    <span>家政</span>
                                </li>
                            </Link>
                            <Link to="/search/gouwua">
                                <li>
                                    <i className="fa fa-bicycle"></i>
                                    <span>购物</span>
                                </li>
                            </Link>
                            <Link to="/search/jiadiana">
                                <li>
                                    <i className="fa fa-book"></i>
                                    <span>家电</span>
                                </li>
                            </Link>
                            <Link to="/search/jiazhenga">
                                <li>
                                    <i className="fa fa-bug"></i>
                                    <span>家政</span>
                                </li>
                            </Link>
                            <Link to="/search/yunasd">
                                <li>
                                    <i className="fa fa-cloud"></i>
                                    <span>云存</span>
                                </li>
                            </Link>
                            <Link to="/search/yinpiasd">
                                <li>
                                    <i className="fa fa-coffee"></i>
                                    <span>饮品</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="pop">
                    <ul>
                        <li className={this.state.index === 0 ? 'navred' : ''}></li>
                        <li className={this.state.index === 1 ? 'navred' : ''}></li>
                        <li className={this.state.index === 2 ? 'navred' : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default SwiperIndex
