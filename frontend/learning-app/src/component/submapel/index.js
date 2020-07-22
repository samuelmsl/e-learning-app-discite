import React, { Component } from 'react'
 
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5zZW4iLCJwYXNzd29yZCI6ImphbnNlbiIsImlzcyI6Imd1cnUiLCJleHAiOjE1OTU1MTcwMTYsImlhdCI6MTU5NTM5NzAxNiwianRpIjoiMSIsInVzZXJuYW1lIjoiamFuc2VuIn0.X-AQQmorfFa62Go4OwVu8b_vowvWcRU-MSqp22vNJ8w";
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: 'Samuel',
            mapel: 'Matematika',
            jumlahMateri: 0,
            jumlahSoal: 0,
            kelas: "SMA 2"
        }
    }

    getUrlVars = () => {
        const vars = {};
        const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }

    countSoal = () => {
        const reqCountSoal = {
            nama_kelas: this.state.kelas,
            nama_mapel: this.state.mapel
        }

        fetch("http://localhost:8080/countSoal", {
            method: "POST",
            body: JSON.stringify(reqCountSoal),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
                this.setState({
                    jumlahSoal: response
                })
            })
    }

    countMateri = () => {
        const reqCountMateri = {
            nama_kelas: this.state.kelas,
            nama_mapel: this.state.mapel
        }

        fetch("http://localhost:8080/countModul", {
            method: "POST",
            body: JSON.stringify(reqCountMateri),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
                this.setState({
                    jumlahMateri: response
                })
            })
    }

    componentDidMount() {
        this.setState({
            mapel: decodeURIComponent(this.getUrlVars()["mapel"])
        })

        setTimeout(() => {
            this.countSoal()
            this.countMateri()
        }, 100);
    }

    render() {
        return (
            <>
                <div id="page-content-wrapper">
                    <div className="container mt-5 ml-5">
                        <h2 className="my-3 font-weight-bold bluehead">{this.state.mapel}</h2>
                        <div className="d-flex justify-content-between mt-5">
                            <div className="card-one">
                                <div className="d-flex justify-content-between mt-2">
                                    <div className="aone d-flex justify-content-center mt-4 ml-3 ">
                                        <h1 className="text-light font-weight-bold mt-4">{this.state.jumlahMateri}</h1>
                                    </div>
                                    <svg width="4em" height="4em" viewBox="0 0 16 16" className="bluetext mt-4 mr-5 bi bi-journals" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1H2a2 2 0 0 1 2-2z" />
                                        <path d="M2 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2z" />
                                        <path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </div>
                                <a href="/murid/submapel/daftarmateri">
                                    <p className="d-flex justify-content-end mr-5 bluetext">Daftar Materi</p>
                                </a>
                            </div>

                            <div className="card-two">
                                <div className="d-flex justify-content-between mt-2">
                                    <div className="atwo d-flex justify-content-center mt-4 ml-3">
                                        <h1 className="text-light font-weight-bold mt-4">{this.state.jumlahSoal}</h1>
                                    </div>
                                    <svg width="4em" height="4em" viewBox="0 0 16 16" className="bluetext mt-4 mr-5 bi bi-journals" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2z" />
                                        <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2zM1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                                    </svg>
                                </div>
                                <a href="/murid/submapel/daftarsoal">
                                    <p className="d-flex justify-content-end mr-5 bluetext">Daftar Soal</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
