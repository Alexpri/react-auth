import React, { Component } from 'react'
import { userCheck } from '../AC/userCheck'
import { connect } from 'react-redux'

class LoginForm extends Component {

    state = {
        user: '',
        password: ''
    }

    render() {
        console.log(this.state)
        const { user, password } = this.state

       return (
            <form onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <div>
                    <input value={user} onChange={this.handleChange('text')} name="login" placeholder="Login" />
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
        userCheck(this.state)        
    }
}

export default connect((state) => {
    console.log(state)
    return {
        

    }
}, {
    userCheck
})(LoginForm)