import React from 'react'
import { Router, browserHistory, Route, IndexRoute, Redirect } from 'react-router'
import Root from './containers/Root'
import LoginForm from './containers/LoginForm'
import LoginSuccess from './containers/LoginSuccess'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Root}>
            <IndexRoute component={LoginForm} />
            <Route path="success-page" component={LoginSuccess}/>
            <Redirect from="*" to="/"/>
        </Route>
    </Router>
)