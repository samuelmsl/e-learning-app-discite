import React, { Component } from 'react'
import registerImage from '../Assets/Images/registersvg.svg'
import './Register.css'
import { Link } from 'react-router-dom'

export default class Register extends Component {
    render() {
        return (
            <>
                <div className="register">
                    <br />
                    <Link to="/">
                        <h3 className="text-light ml-5">Discite</h3>
                    </Link>
                    <div className="container">
                        <div className="text-center">
                            <div className="row row-register">
                                <div className="col-sm-6">
                                    <img src={registerImage} alt="" className="register-img mt-5" />
                                </div>
                                <div className="col-sm-4">
                                    <form className="text-light">
                                        <h3>Register Page</h3>
                                        <input type="text" className="form-control my-3" name="nama" id="nama" placeholder="Nama" maxLength="30" autoComplete="off" required />
                                        <input type="text" className="form-control my-3" name="username" id="username" placeholder="Username" maxLength="30" autoComplete="off" required />
                                        <input type="email" className="form-control my-3" name="email" id="email" placeholder="Email" maxLength="40" autoComplete="off" required />
                                        <input type="password" className="form-control my-3" name="password" id="username" maxLength="30" placeholder="Password" required />
                                        <input type="text" className="form-control my-3" name="kelas" id="kelas" placeholder="Kelas" maxLength="20" autoComplete="off" required />
                                        <button type="submit" className="btn register-btn px-3 mb-3">Register</button>
                                        <p>Sudah punya akun? <Link to="/login" className="text-light">Login</Link> </p>
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
