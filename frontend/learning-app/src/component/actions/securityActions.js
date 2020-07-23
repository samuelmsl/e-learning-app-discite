import axios from "axios";
import { SET_CURRENT_USER } from "./types";
import setJWTToken from "../security/setJWTToken";
import jwt_decode from "jwt-decode";



export const login = LoginRequest => async dispatch => {
  try {
    // post => Login Request
    const res = await axios.post("http://localhost:8080/auth", LoginRequest);
    // extract token from res.data
    const { token } = res.data;
    // store the token in the localStorage
    localStorage.setItem("jwtToken", token);
    // set our token in header ***
    setJWTToken(token);
    // console.log(token);
    // decode token on React
    const decoded = jwt_decode(token);
    // dispatch to our securityReducer
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded
    });
  } catch (err) {
  alert("Username or Password is Invalid !")
  localStorage.removeItem("jwtToken");
  setJWTToken(false);
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setJWTToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};