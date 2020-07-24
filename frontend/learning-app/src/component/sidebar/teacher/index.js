import React, { Component } from 'react';
import Ava from "../../img/avaprofil.png"
import BuatSoal from './BuatSoal';
import BuatModul from './BuatModul';
const jwtDecode = require('jwt-decode');

const token = localStorage.getItem("jwtToken");
let decodeToken = '';
if (token != null) {
    decodeToken = jwtDecode(token);
}
class SidebarTeacher extends Component {
    // state = {  }
    render() {
        return (
            <>
                {/* <div className="d-flex" id="wrapper"> */}
                <div className="bg-light col-md-2 bluehead" id="sidebar-wrapper" style={{ left: "0", top: "0", height: "800px" }}>
                    <div className="list-group list-group-flush mt">
                        <div className="d-flex justify-content-center mt-4">
                            <img src={Ava} width="100" height="100" alt="" />
                        </div>
                        <h4 className="mt-2 text-center">{decodeToken.jti}</h4>
                        <a href="/guru" className="list-group-item list-group-item-action bg-light bluehead">
                            <i className="fa fa-tachometer mr-2" aria-hidden="true" />Dashboard
                        </a>
                        <a href="/guru/materi" className="list-group-item list-group-item-action bg-light bluehead">
                            <i className="fa fa-book mr-2" aria-hidden="true" />Daftar Materi
                        </a>
                        <a href="/guru/daftarsiswa" className="list-group-item list-group-item-action bg-light bluehead">
                            <i className="fa fa-users mr-2" aria-hidden="true" />Daftar Siswa
                        </a>
                        <a href="/guru/daftarnilai" className="list-group-item list-group-item-action bg-light bluehead">
                            <i className="fa fa-star mr-2" aria-hidden="true" />Daftar Nilai
                        </a>
                        <a href="/guru" className="list-group-item list-group-item-action bg-light bluehead" data-toggle="modal" data-target="#buatSoal">
                            <i className="fa fa-pencil-square-o mr-2" aria-hidden="true" />Buat Soal
                        </a>
                        <a href="/guru" className="list-group-item list-group-item-action bg-light bluehead" data-toggle="modal" data-target="#buatModul">
                            <i className="fa fa-pencil-square-o mr-2" aria-hidden="true" />Buat Modul
                        </a>
                    </div>
                </div>
                <div className="modal fade" id="buatSoal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <BuatSoal />
                </div>
                <div className="modal fade" id="buatModul" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <BuatModul />
                </div>
                {/* </div> */}
            </>
        );
    }
}

export default SidebarTeacher;