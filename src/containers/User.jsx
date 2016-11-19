import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchViewerProps} from '../actions/viewer'

class User extends Component {

    componentDidMount(){
        this.props.dispatch(fetchViewerProps())
    }
    
    render(){
        const {params, token} = this.props
        const {id} = params

        return <div>
            <div>{token}</div>
            {id == undefined && <span>It's me</span>}
            {id != undefined && <span>it's user {id}</span>}
        </div>
    }
}

export default User = connect(store => ({
    token: store.viewer.token,
}))(User)
