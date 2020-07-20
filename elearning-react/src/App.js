import React from 'react';
import './App.css';
import Login from './Components/Login'
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from './Components/Register';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
