import React, { Component } from "react";

class Modul extends Component {
    // state = {  }
    render() {
        return (
            <>
                <div id="page-content-wrapper">
                    <div className="container mt-5 ml-5 ">
                        <h2 className="mt-4 font-weight-bold bluehead col-md-12">Daftar Modul</h2>
                        <div className="d-flex mt-5">
                            <div className="card-one">
                                <div className="d-flex justify-content-between mt-2">
                                    <div className="aone d-flex justify-content-center mt-4 ml-3 ">
                                        <h1 className="text-light font-weight-bold mt-4">1</h1>
                                    </div>
                                    <svg width="4em" height="4em" viewBox="0 0 16 16" className="bluetext mt-4 mr-5 bi bi-person-lines-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </div>
                                <a href="guru/materi/modul" className="d-flex justify-content-end mr-4 bluetext">Matematika</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Modul;