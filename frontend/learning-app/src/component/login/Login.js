import React, { Component } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from "axios"
import loginImage from '../img/loginsvg.svg'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleButtonLogin = () => {
        axios.post("http://localhost:8080/auth", {
            username: this.state.username,
            password: this.state.password,
        })
            .then((res) => {
                let token = res.data.token;
                window.localStorage.setItem("tokenLoginUser", token);

                if (window.localStorage.getItem("tokenLoginUser") === "null") {
                    alert("Failed!");
                } else {
                    alert("Success!");
                }
            })
            .catch((err) => console.log(err));
    };

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
                                    <h3>Login Page</h3>
                                    <input type="text" className="form-control my-3" name="username" id="username" placeholder="Username" maxLength="30" autoComplete="off" required onChange={(event) => this.onChange(event)} />
                                    <input type="password" className="form-control my-3" name="password" id="password" maxLength="30" placeholder="Password" required onChange={(event) => this.onChange(event)} />
                                    <button type="submit" className="btn login-btn px-3 mb-3" onClick={this.handleButtonLogin}>Login</button>
                                    <p>Belum punya akun? <Link to="/register" className="text-light">Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}