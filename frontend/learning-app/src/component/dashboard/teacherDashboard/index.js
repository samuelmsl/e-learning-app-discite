import React, { Component } from "react";
import "./app.css";

class TeacherDashboard extends Component {
    // state = {  }
    render() {
        return (
            <div id="page-content-wrapper">
                <div className="container mt-5 ml-5">
                    <h2 className="mt-4 font-weight-bold bluehead">Selamat Datang, Guru</h2>
                    <div className="d-flex justify-content-between mt-5">
                        <div className="card-one">
                            <div className="d-flex justify-content-between mt-2">

                                <div className="aone d-flex justify-content-center mt-4 ml-3 ">
                                    <h1 className="text-light font-weight-bold mt-4">20</h1>
                                </div>
                                <svg width="4em" height="4em" viewBox="0 0 16 16" className="bluetext mt-4 mr-5 bi bi-person-lines-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </div>
                            <p className="d-flex justify-content-end mr-4 bluetext">Siswa terdaftar</p>
                        </div>

                        <div className="card-two">
                            <div className="d-flex justify-content-between mt-2">
                                <div className="atwo d-flex justify-content-center mt-4 ml-3">
                                    <h1 className="text-light font-weight-bold mt-4">20</h1>
                                </div>
                                <svg width="4em" height="4em" viewBox="0 0 16 16" className="bluetext mt-4 mr-5 bi bi-journals" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2z" />
                                    <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2zM1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                                </svg>
                            </div>
                            <p className="d-flex justify-content-end mr-4 bluetext" >Materi tersedia</p>
                        </div>

                        <div className="card-three">
                            <div className="d-flex justify-content-between mt-2">
                                <div className="athree d-flex justify-content-center mt-4 ml-3">
                                    <h1 className="text-light font-weight-bold mt-4">20</h1>
                                </div>
                                <svg width="4em" height="4em" viewBox="0 0 16 16" className="bluetext mt-4 mr-5 bi bi-bookmark-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4.5 2a.5.5 0 0 0-.5.5v11.066l4-2.667 4 2.667V8.5a.5.5 0 0 1 1 0v6.934l-5-3.333-5 3.333V2.5A1.5 1.5 0 0 1 4.5 1h4a.5.5 0 0 1 0 1h-4z" />
                                    <path fill-rule="evenodd" d="M15.854 2.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 4.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </div>
                            <p className="d-flex justify-content-end mr-4 bluetext">Soal dibuat</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeacherDashboard;