import React, { Component } from 'react'
import LoginContainer from './LoginContainer'
import { Provider } from 'react-redux'
import store from '../store'
import '../App.css'

class Root extends Component {

	render() {        
	    return (
            <Provider store={store}>
                <div>
                    <LoginContainer />
                </div>
            </Provider>
		)
	}
}

export default Root
