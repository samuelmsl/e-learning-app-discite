import React, { Component } from 'react'
import registerImage from '../Assets/Images/registersvg.svg'
import './Register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Register extends Component {
    state = {
        nama: '',
        pasword: '',
        type: 'siswa',
        username: '',
        id_kelas: '',
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            nama: this.state.nama,
            password: this.state.password,
            type: this.state.type,
            username: this.state.username,
            kelas: {
                id: parseInt(this.state.id_kelas)
            }
        };

        console.log(user)

        // axios.post("http://localhost:8080/public/register", { user })
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err));

        fetch(`http://localhost:8080/public/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(response => {
                console.log(response)
            })
            .catch(console.error);
    }

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
                                    <h3>Register Page</h3>
                                    <input type="text" className="form-control my-3" name="nama" id="nama" placeholder="Nama" maxLength="30" autoComplete="off" required onChange={this.handleChange} />
                                    <input type="text" className="form-control my-3" name="username" id="username" placeholder="Username" maxLength="30" autoComplete="off" required onChange={this.handleChange} />
                                    <input type="password" className="form-control my-3" name="password" id="password" maxLength="30" placeholder="Password" required onChange={this.handleChange} />
                                    <input type="text" className="form-control my-3" name="id_kelas" id="id_kelas" placeholder="Kelas" maxLength="20" autoComplete="off" required onChange={this.handleChange} />
                                    <button type="submit" className="btn register-btn px-3 mb-3" onClick={this.handleSubmit}>Register</button>
                                    <p>Sudah punya akun? <Link to="/login" className="text-light">Login</Link> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
