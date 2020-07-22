import React, { Component } from "react";
const jwtDecode = require('jwt-decode');

const token = localStorage.getItem("jwtToken");
let decodeToken = '';
if (token != null) {
     decodeToken = jwtDecode(token);
}
class StudentDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            materi: [],
            kelas: decodeToken.aud,
            mapel: decodeURIComponent(this.getUrlVars()["mapel"]),
            showAllMateri: null
        }
    } 
    
    getUrlVars = () => {
        const vars = {};
        const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }


    moveToDetailMateri = judul => {
        window.location.href = `/murid/submapel/daftarmateri/materi?mapel=${this.state.mapel}&judul=${judul}`
    }

    getAllMateri = async () => {
        const reqModulByKelas = {
            nama_kelas: this.state.kelas,
            nama_mapel: this.state.mapel,
        }

        await fetch("http://localhost:8080/modulByKelas", {
            method: "POST",
            body: JSON.stringify(reqModulByKelas),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
                this.setState({
                    materi: response
                })
            })

 
        const showAllMateri = this.state.materi.map((data, key) => {
            return (
                <div className="card-one" key={key}>
                            <div className="d-flex justify-content-between mt-2">
                                <svg width="4em" height="4em" viewBox="0 0 16 16" className="bluetext my-3 mx-auto bi bi-person-lines-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                    <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                </svg>
                            </div>
                            <a onClick={() => this.moveToDetailMateri(data.nama_modul)}>
                                <p className="text-center bluetext">{data.nama_modul}</p>
                            </a>
                        </div>
            )
        })
        
        this.setState({
            showAllMateri: showAllMateri
        })

    }

    componentDidMount() {
        this.getAllMateri();
        console.log(this.state.mapel);
        console.log(this.state.kelas);
    }

    render() {
        return (
            <div id="page-content-wrapper">
                <div className="container mt-5 ml-5">
                    <h2 className="my-3 font-weight-bold bluehead">Daftar Materi</h2>
                    <div className="d-flex justify-content-between mt-5">
                        {this.state.showAllMateri}
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentDashboard;