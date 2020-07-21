import React, { Component } from "react";

class StudentDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nama: 'Samuel'
        }
    } 


    render() {
        return (
            <div id="page-content-wrapper">
                <div className="container mt-5 ml-5">
                    <h2 className="my-3 font-weight-bold bluehead">Selamat Datang, {this.state.nama}!</h2>
                    <div className="d-flex justify-content-between mt-5">
                        <div className="card-one">
                            <div className="d-flex justify-content-between mt-2">
                                <svg width="4em" height="4em" viewBox="0 0 16 16" className="bluetext my-3 mx-auto bi bi-person-lines-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                    <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                </svg>
                            </div>
                            <a href="murid/submapel?mapel=Matematika">
                                <p className="text-center bluetext">Matematika</p>
                                
                            </a>
                        </div>

                        <div className="card-two">
                            <div className="d-flex justify-content-between mt-2">
                                <svg width="4em" height="4em" viewBox="0 0 16 16" className="bluetext my-3 mx-auto mr-5 bi bi-journals" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                    <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                </svg>
                            </div>
                            <a href="murid/submapel?mapel=Bahasa Indonesia">
                                <p className="text-center bluetext">Bahasa Indonesia</p>
                            </a>
                        </div>

                        <div className="card-three">
                            <div className="d-flex justify-content-between mt-2">
                                <svg width="4em" height="4em" viewBox="0 0 16 16" className="bluetext my-3 mx-auto mr-5 bi bi-bookmark-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                    <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                </svg>
                            </div>
                            <a href="murid/submapel?mapel=Bahasa Inggris">
                                <p className="text-center bluetext">Bahasa Inggris</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentDashboard;