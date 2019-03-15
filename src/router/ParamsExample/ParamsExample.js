import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
function ParamsExample() {
    return (
        <Router>
            <div>
                <h2>Accounts</h2>
                <ul>
                    <li>
                        <Link to='/netflix'>Netflix</Link>
                    </li>
                    <li>
                        <Link to='/zillow-group'>zillow-group</Link>
                    </li>
                    <li>
                        <Link to='/yahoo'>yahoo</Link>
                    </li>
                    <li>
                        <Link to='/modus-create'>modus create</Link>
                    </li>
                    <li>
                        <Link to='/order/asc'>asc</Link>
                    </li>
                    <li>
                        <Link to='/order/desc'>desc</Link>
                    </li>
                    <li>
                        <Link to='/order/yahoo'>yahoo</Link>
                    </li>
                    <li>
                        <Link to='/modus-create'>modus create</Link>
                    </li>
                </ul>
                <Route exact path="/:id" component={Child}></Route>
                <Route path="/order/:direction(asc|desc)" component={ComponentWithRegex}></Route>
            </div>
        </Router>
    )
}
function Child({ match }) {
    console.log(match)
    return (
        <div>{match.url}111</div>
    )
}
function ComponentWithRegex({match}){
    return (
        <div>
            <h3>Only asc/desc are allowed:{match.params.direction}</h3>
        </div>
    )
}
export default ParamsExample