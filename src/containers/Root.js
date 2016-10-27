import React, { Component } from 'react'
import { LoginForm } from './LoginForm'
import { Provider } from 'react-redux'
import store from '../store'
import '../App.css'

class Root extends Component {

	render() {
        console.log(this.state)
	    return (
            <Provider store={store}>
                <div>
                    <LoginForm />
                </div>
            </Provider>
		)
	}
}

export default Root
