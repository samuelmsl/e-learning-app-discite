import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Student from './component/student/index';
import Teacher from './component/teacher/index';
import Dashboard from "./component/frontpage/dashboard"
import Login from "./component/login/Login"
import Register from './component/register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route path="/murid" component={Student} />
        <Route path="/guru" component={Teacher} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
