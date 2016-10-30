import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'

class Root extends Component {

	render() {
	    return (
            <Provider store={store}>
                <div className="container">
                    <div className="col-md-3 form-wrapper text-center center-block">
                        {this.props.children}
                    </div>
                </div>
            </Provider>
		)
	}
}

export default Root
