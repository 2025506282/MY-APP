import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'

import About from '../../containers/About/About'
import Inbox from '../../containers/Inbox/Inbox'
class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                <Router>
                    <Route path="about" component={About} />
                    <Route path="inbox" component={Inbox} />
                </Router>
            </div>
        )
    }
}
export default App