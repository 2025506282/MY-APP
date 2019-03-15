import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'
function AuthExample() {
    return (
        <Router>
            <div>
                <AuthButton />
                <ul>
                    <li>
                        <Link to='/public'>Public Page</Link>
                    </li>
                    <li>
                        <Link to='/protected'>Protected Page</Link>
                    </li>
                </ul>
                <Route path="/public" component={Public}></Route>
                <Route path="/login" component={Login}></Route>
                <PrivateRoute path="/protected" component={Protected}></PrivateRoute>
            </div>
        </Router>
    )
}
const fakeAuth = {
    isAuthenicated: false,
    authenticate(cb) {
        this.isAuthenicated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenicated = false
        setTimeout(cb, 100)
    }
}
function PrivateRoute({component:Component,...rest}){
    console.log(rest)
    console.log(Component)
    return (
        <Route
        {...rest}
        render={props => fakeAuth.isAuthenicated? (
            <Component {...props}/>
        ):(
            <Redirect to={{
                pathname: "/login",
                state: {from: props.location}
            }}
            />
        )}
        />
    )
}
function Public() {
    return <h3>Public</h3>
}
function Protected() {
    return <h3>Protected</h3>
}
class Login extends Component {
    state = { redirectToReferer: false };
    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({
                redirectToReferer: false
            })
        })
    }
    render() {
        let { from } = this.props.location.state || {from: {pathname: '/'}}
        let { redirectToReferer } = this.state
        if(redirectToReferer) return <Redirect to={from}/>
        return (
            <div>
                <p>You must log in to view this page at {from.pathname}</p>
                <button onClick={this.login}>Login in</button>
            </div>
        )
    }
}
const AuthButton = withRouter(
    ({ history }) => fakeAuth.isAuthenicated ? (
        <p>
            Welcome!{" "}
            <button onClick={() => {
                fakeAuth.signout(() => history.push('/'))
            }}
            >
                Signout
            </button>
        </p>
    ) : (
            <p>You are not logged in.</p>
        )
)
export default AuthExample