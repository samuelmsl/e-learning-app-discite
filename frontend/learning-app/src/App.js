import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Teacher from './component/teacher/index';
import Dashboard from "./component/frontpage/dashboard"

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path = "/" component = {Dashboard} />
      <Route path = "/guru" component = {Teacher} />
      
      </Router>
    </div>
  );
}

export default App;
