import React, { Component } from 'react'
// import loginImage from '../Assets/Images/loginsvg.svg'
import './Login.css'
import { Link } from 'react-router-dom'

export default class Login extends Component {
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
                                    {/* <img src={loginImage} alt="" className="login-img" /> */}
                                </div>
                                <div className="col-sm-4">
                                    <form className="text-light">
                                        <h3>Login Page</h3>
                                        <input type="text" className="form-control my-3" name="username" id="username" placeholder="Username" maxLength="30" autoComplete="off" required />
                                        <input type="password" className="form-control my-3" name="password" id="password" maxLength="30" placeholder="Password" required />
                                        <button type="submit" className="btn login-btn px-3 mb-3">Login</button>
                                        <p>Belum punya akun? <Link to="/register" className="text-light">Register</Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
