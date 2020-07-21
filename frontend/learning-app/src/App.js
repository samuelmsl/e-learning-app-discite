import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Teacher from './component/teacher/index';
import Dashboard from "./component/frontpage/dashboard"
import Login from "./component/login/Login"

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path = "/" component = {Dashboard} />
      <Route path = "/guru" component = {Teacher} />
      <Route path = "/login" component = {Login} />
      
      </Router>
    </div>
  );
}

export default App;
