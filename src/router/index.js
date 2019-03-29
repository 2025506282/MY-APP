import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Index from "../containers/Index/Index"
import Login from "../containers/User/Login/Login"
import Register from "../containers/User/Register/Register"
import NotFound from "../containers/404/404"
import { Provider } from 'react-redux'

import store from '../reducers/index'
export default class RouterConfig extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/404" component={NotFound} />
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}