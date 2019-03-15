import React, { Component } from 'react'
import CommonNav from '../../components/CommonNav/CommonNav'
import CommonBreadcrumb from '../../components/CommonBreadcrumb/CommonBreadcrumb'
import './Index.scss'
import News from '../../containers/News/News'
import About from '../../containers/About/About'
import Home from '../../containers/Home/Home'
import Contact from '../../containers/Contact/Contact'
import Center from '../../containers/Center/Center'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Index extends Component {
    render() {
        return (
            <div className="box">
                <Router>
                    <div>
                        <CommonNav />
                        <main className="main">
                            <CommonBreadcrumb />
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/contact" exact component={Contact} />
                                <Route path="/about" component={About} />
                                <Route path="/news" component={News} />
                                <Route path="/center" component={Center} />
                            </Switch>
                        </main>
                    </div>
                </Router>
            </div>
        )
    }
}
export default Index