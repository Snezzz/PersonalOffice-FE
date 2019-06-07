import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import StartPage from './Components/StartPage';
import './App.css';
import Main from "./Components/Main";
import UserContainer from "./Containers/UserContainer";
import LogInContainer from "./Containers/LogInContainer"
import SignUpContainer from "./Containers/SignUpContainer"
import HelpContainer from "./Containers"
function App() {
  return (
      <Router>

          <Switch>
              <Route path="/login" component={LogInContainer}/>
              <Route path="/help" component={HelpContainer}/>
              <Route path="/signup" component={SignUpContainer}/>
              <Route path="/start" component={StartPage}/>
              <Route path="/cabinet" component={UserContainer}/>
          </Switch>
      </Router>
  );
}

export default App;
