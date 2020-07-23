import React, { Component } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import loginImage from '../img/loginsvg.svg'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../actions/securityActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/murid");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.security.validToken) {
      alert("Berhasil Login!");
      // this.props.history.push("/murid");
      window.location.href = "/murid";
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }


  onSubmit(e) {
    e.preventDefault();
    const LoginRequest = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(LoginRequest);
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <>
        <div className="login">
          <br />
          <Link to="/">
            <h3 className="text-light ml-5">Discite</h3>
          </Link>
          <div className="container">
            <div className="text-center">
              <div className="row row-login">
                <div className="col-sm-6">
                  <img src={loginImage} alt="" className="login-img" />
                </div>
                <div className="col-sm-4">
                  <h3 className="text-light">Login Page</h3>
                  <form onSubmit={this.onSubmit} >

                    <input value={this.state.name} type="text" className="form-control my-3" name="username" id="username" placeholder="Username" maxLength="30" autoComplete="off" required onChange={this.onChange} />
                    <input value={this.state.password} type="password" className="form-control my-3" name="password" id="password" maxLength="30" placeholder="Password" required onChange={this.onChange} />
                    <button className="btn login-btn px-3 mb-3">Login</button>
                  </form>
                  <p className="text-light" style={{ fontSize: 15 }}>Belum punya akun? <Link to="/register" className="text-light">Register</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { login }
)(Login);