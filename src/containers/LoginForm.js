import React, { Component } from 'react'
import { userCheck } from '../AC/userCheck'
import { connect } from 'react-redux'

class LoginForm extends Component {

    state = {
        user: '',
        password: '',
        isValid: ''
    }

    render() {
        const { loading } = this.props
        const { user, password, isValid } = this.state

       return (
            <form onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <div>
                    <input className={isValid} value={user} onChange={this.handleChange('user')} name="login" placeholder="Login" />
                </div>
                <div>
                    <input value={password} onChange={this.handleChange('password')} name="password" placeholder="Password" />
                </div>
                <div>
                    <input type="submit" value="Login"/>
                </div>
            </form>
       ) 
    }

    handleChange = element => ev => {
        this.setState({
            [element]: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()

        this.props.userCheck({
            user: this.state.user,
            password: this.state.password
        })        
    }
}

export default connect(({ userCheck }) => {
    return {
        loading: userCheck.loading
    }
}, { userCheck })(LoginForm)