import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="navbar main-color">
                <a href="#" className="navbar-brand col-md-8">
                    <h1 className="mt-2"> <strong className="text-light">Discite</strong></h1>
                </a>
                <div className="logout-button d-flex justify-content-between mr-3">
                    <Link to="/" className="ml-4">
                        <strong className="ml-1" >Logout</strong>
                    </Link>
                </div>
            </div >
        );
    }
}

export default Navbar;