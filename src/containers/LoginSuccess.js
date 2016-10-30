import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class LoginSuccess extends Component {

    static contextTypes = {
        router: PropTypes.object
    }
    
    componentWillMount() {
        if (!this.props.isValid) {
            this.handleLogin()
        }
    }

    render() {
        return (
            <div>
                <h3><span className="glyphicon glyphicon-ok"></span>Succesfull logged</h3>
            </div>
        )
    }

    handleLogin(){
        this.context.router.push('/');
    }
}

export default connect(({ userCheck }) => {
    return {
        isValid: userCheck.isValid
    }
}, null)(LoginSuccess)