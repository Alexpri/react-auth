import React, { Component } from 'react'
import LoginForm from './LoginForm'
import LoginSuccess from './LoginSuccess'
import { connect } from 'react-redux'

class LoginContainer extends Component {

	render() {
        console.log(this.props)
        const { Auth } = this.props

        const formBLock = Auth ? <LoginSuccess /> : <LoginForm />
        
	    return (
                <div>
                    {formBLock}
                </div>
		)
	}
}

export default connect(({ userCheck }) => {
    return {
        Auth: userCheck.Auth
    }
}, null)(LoginContainer)
