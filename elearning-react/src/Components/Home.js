import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Ini halaman home</h1>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        )
    }
}
