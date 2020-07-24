import React, { Component } from 'react';
import "./app.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"



class Dashboard extends Component {

    componentDidMount(){
        const { validToken, user } = this.props.security;
            if (validToken == true && user.iss == "murid") {
                window.location.href = "/murid"
            }
            else if (validToken == true && user.iss == "guru") {
                window.location.href = "/guru"
            }
    }

    render() {
        

            

        return (
            <>
                <div id="initFront">
                    <div className="text-light">
                        <div className=" ml-4 mt-2 navbar text-light"><h1 className="font-weight-bold">Discite</h1></div>
                        <div className="ml-5 mt-4">
                            <h3 className="ml-5 mt-5">“Lorem ipsum dolor sit amet<br></br>
                        consectetur adipiscing elit<br></br>
                        sed do eiusmod”
                        </h3>
                            <h1 className="font-weight-bold mt-5 ml-5">
                                Tetap Belajar walaupun <br></br>di rumah aja...
                        </h1>

                            <div className="buttonlogin ml-5 mt-4 bluetext d-flex justify-content-center align-items-center">
                                <a href="/register" style={{ textDecoration: "none" }}>Daftar Sekarang</a>
                            </div>
                            <h3 className="ml-5 mt-4">Sudah memiliki akun?</h3>

                            <div className="buttonlogin ml-5 mt-4 bluetext d-flex justify-content-center align-items-center">
                                <a href="/login" style={{ textDecoration: "none" }}>Masuk</a>
                            </div>
                        </div>
                    </div>

                </div>
            </>

        );
    }
// }
}

Dashboard.propTypes = {
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps,
)(Dashboard);