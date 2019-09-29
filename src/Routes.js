import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import PageA from './components/PageA'
import PageB from './components/PageB'

export class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={PageA} />
                    <Route path="/pageb" exact component={PageB} />

                </Switch>
            </Router>
        )
    }
}

export default Routes
