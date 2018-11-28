import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './components/views/landingPage';
import NotFound from './components/views/notFound';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={LandingPage} />
            <Route exact path="/login" component={LandingPage} />
            <Route exact path="/profile" component={LandingPage} />
            <Route exact path="/entries" component={LandingPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
