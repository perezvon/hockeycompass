import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import { Header } from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import NewGame from './NewGame';
import GamesList from './GamesList';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Navigation />
            {/*<Header />*/}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/games' component={GamesList} />
              <Route exact path='/newgame' component={NewGame} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;