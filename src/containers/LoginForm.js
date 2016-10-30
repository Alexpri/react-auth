import React, { Component, PropTypes } from 'react'
import { userCheck } from '../AC/userCheck'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

class LoginForm extends Component {

    state = {
        Username: '',
        Password: '',
        isValid: null
    }
    
    static contextTypes = {
        router: PropTypes.object
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isValid) {
            this.handleLogin()
        }
    }

    render() {
        const { loading, isValid } = this.props
        const { Username, Password } = this.state
        const classLoading = loading ? 'glyphicon glyphicon-cog' : ''
        const isValidCLass = isValid == null ? '' :
                             isValid ? '' : 'has-error'

       return (
            <form onSubmit={this.handleSubmit}>
                <h3 className="form-title"><span className="glyphicon glyphicon-fire"></span>Login</h3>
                <div className={`form-group ${isValidCLass}`}>
                    <input className="form-control" value={Username} onChange={this.handleChange('Username')} name="Username" placeholder="Login" />
                </div>
                <div className="form-group">
                    <input className="form-control" value={Password} onChange={this.handleChange('Password')} name="Password" placeholder="Password" />
                </div>
                <div>
                    <Button className={`btn-form ${classLoading}`} type="submit"><span className="default-text">Login &rarr;&nbsp;</span></Button>
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
            Username: this.state.Username,
            Password: this.state.Password
        })        
    }

    handleLogin(){
        this.context.router.push('/success-page');
    }
}

export default connect(({ userCheck }) => {
    return {
        loading: userCheck.loading,
        isValid: userCheck.isValid
    }
}, { userCheck })(LoginForm)