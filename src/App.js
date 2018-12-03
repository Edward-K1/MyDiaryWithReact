import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './views/landingPage';
import NotFound from './views/notFound';
import Signup from './components/signup/signup';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Login from './components/login/login';
import EntriesPage from './views/entriesPage';
import CreateEntry from './components/diary/createEntry';
class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={EntriesPage} />
            <Route exact path="/entry/create" component={CreateEntry} />
            <Route exact path="/entry/:int/edit" component={CreateEntry} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
