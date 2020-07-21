import React, { Component } from 'react'
import "./app.css";

export default class index extends Component {
    render() {
        return (
            <>
                <div id="page-content-wrapper">
                    <div className="container mt-5 ml-5">
                        <h2 className="my-3 font-weight-bold bluehead">Bahasa Inggris</h2>
                        <div className="d-flex justify-content-between mt-5">
                            <div className="card-one">
                                <div className="d-flex justify-content-between mt-2">
                                    <div className="aone d-flex justify-content-center mt-4 ml-3 ">
                                        <h1 className="text-light font-weight-bold mt-4">20</h1>
                                    </div>
                                    <svg width="4em" height="4em" viewBox="0 0 16 16" className="bluetext mt-4 mr-5 bi bi-journals" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1H2a2 2 0 0 1 2-2z" />
                                        <path d="M2 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2z" />
                                        <path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </div>
                                <p className="d-flex justify-content-end mr-5 bluetext">Daftar Materi</p>
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
                                <p className="d-flex justify-content-end mr-5 bluetext">Daftar Soal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
