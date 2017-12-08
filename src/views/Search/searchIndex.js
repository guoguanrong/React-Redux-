import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Search extends Component{
    constructor (props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render () {
        return (
            <div>
                <h1>Search页面</h1>
            </div>
        )
    }
    componentDidMount () {
        console.log(this.props.match.params)
    }
}
export default Search
