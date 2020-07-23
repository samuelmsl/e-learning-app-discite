import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {logout} from '../actions/securityActions'
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Navbar extends Component {
    // state = {}
    logout() {
        this.props.logout();
        window.location.href = "/";
      }
    render() {
        return (
            <div className="navbar main-color">
                <a href="#" className="navbar-brand col-md-8">
                    <h1 className="mt-2"> <strong className="text-light">Discite</strong></h1>
                </a>
                <div className="d-flex justify-content-between mr-3">
                <Link to="/" className="ml-4">
                        <button onClick = {this.logout.bind(this)} to = "/" className="logout-button " style = {{border:"none"}} >
                        <strong className="ml-1 bluetext" >Logout</strong>
                        </button>
                    </Link>
                </div>
            </div >
        );
    }
}


Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    security: state.security
  });

export default connect(
    mapStateToProps,
    { logout }
  )(Navbar);