import React, { Component } from 'react'

const jwtDecode = require('jwt-decode');
const token = localStorage.getItem("jwtToken");
let decodeToken = '';
if (token != null) {
    decodeToken = jwtDecode(token);
}
export default class BuatModul extends Component {
    state = {
        data: '',
        file_name: '',
        file_type: 'PDF',
        nama_kelas: decodeToken.aud,
        nama_mapel: '',
        nama_modul: '',
        url: '',
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = () => {

        const modul = {
            data: this.state.data,
            file_name: this.state.file_name,
            file_type: this.state.file_type,
            nama_kelas: this.state.nama_kelas,
            nama_mapel: this.state.nama_mapel,
            nama_modul: this.state.nama_modul,
            url: this.state.url,
        };

        console.log(modul);

        fetch(`http://localhost:8080/addModul`, {
            method: "POST",
            body: JSON.stringify(modul),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status == 200) {
                    alert("Berhasil Membuat Modul!")
                }
            })
    }

    render() {
        return (
            <>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Buat Modul</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <input type="file" class="form-control-file h6" name="data" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="file_name" id="file_name" placeholder="File Name" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <select className="form-control" name="nama_mapel" id="nama_mapel" onChange={this.handleChange}>
                                        <option selected disabled>~ Nama Mapel ~</option>
                                        <option value="Matematika">Matematika</option>
                                        <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                                        <option value="Bahasa Inggris">Bahasa Inggris</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="nama_modul" id="nama_modul" placeholder="Nama Modul" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control" name="url" id="url" placeholder="URL" required onChange={this.handleChange} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kembali</button>
                                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
