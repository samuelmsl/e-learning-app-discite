import React, { Component } from 'react';
import "./app.css";

class Dashboard extends Component {
    render() {
        return (

            <>
            <div id = "initFront">

                <div className="text-light">
                    <div className=" ml-4 mt-2 navbar text-light"><h1 className="font-weight-bold">Discite</h1></div>
                    <div className="ml-5 mt-4">
                        <h3 className="ml-5 mt-5">“Lorem ipsum dolor sit amet<br></br>
                        consectetur adipiscing elit<br></br>
                        sed do eiusmod”
                        </h3>
                        <h1 className="font-weight-bold mt-5 ml-5">
                            Tetap Belajar walaupun <br></br>dirumah aja..
                        </h1>

                        <div className="buttonlogin ml-5 mt-4 bluetext d-flex justify-content-center align-items-center">
                            <a href = "/register">
                                Daftar Sekarang
                                </a>
                    </div>
                    <h3 className = "ml-5 mt-4">Sudah memiliki akun?</h3>
                    
                    <div className="buttonlogin ml-5 mt-4 bluetext d-flex justify-content-center align-items-center">
                          <a href = "/login">
                               Masuk
                              </a> 
                    </div>
                    </div>
                </div>

            </div>
            </>

        );
    }
}

export default Dashboard;