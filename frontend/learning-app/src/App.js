import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Student from './component/student/index';
import Teacher from './component/teacher/index';
import Dashboard from "./component/frontpage/dashboard"
import Login from "./component/login/Login"
import Register from './component/register/Register'
import Soal from './component/soal'
import { Provider } from 'react-redux';
import {store, persistor} from "./store";
import SecuredRoute from "./component/security/SecureRouter"
import setJWTToken from './component/security/setJWTToken';
import jwt_decode from 'jwt-decode';
import {SET_CURRENT_USER} from "./component/actions/types";
import {logout} from "./component/actions/securityActions";
import { PersistGate } from 'redux-persist/integration/react';

const jwtToken = localStorage.jwtToken;


if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}


function App() {
  return (
    <div className="App">
       <Provider store ={store}>
<PersistGate loading = {null} persistor = {persistor}>

      <Router>
        <Route exact path="/" component={Dashboard} />
        <SecuredRoute path="/murid" component={Student} />
        <SecuredRoute path="/guru" component={Teacher} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
</PersistGate>
       </Provider>
    </div>
  );
}

export default App;
