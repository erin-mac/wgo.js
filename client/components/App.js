import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NewGame from './NewGame';
import GameBoard from './Board';

export default class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' render={() => <Link to='/newgame'><button>Enter!</button></Link>} />
                    <Route path='/newgame' component={NewGame} />
                    <Route path='/board' component={GameBoard} />
                </Switch>
            </Router>
        )
    }
}