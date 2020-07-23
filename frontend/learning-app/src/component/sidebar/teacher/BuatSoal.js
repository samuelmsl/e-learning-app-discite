import React, { Component } from 'react'

const jwtDecode = require('jwt-decode');
const token = localStorage.getItem("jwtToken");
let decodeToken = '';
if (token != null) {
    decodeToken = jwtDecode(token);
    console.log(decodeToken);
}

export default class BuatSoal extends Component {
    state = {
        nama_mapel: '',
        nama_kelas: decodeToken.aud,
        pilihan_1: '',
        pilihan_2: '',
        pilihan_3: '',
        pilihan_4: '',
        question: '',
        jawaban: '',
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = () => {
        const soal = {
            nama_mapel: this.state.nama_mapel,
            nama_kelas: this.state.nama_kelas,
            pilihan_1: this.state.pilihan_1,
            pilihan_2: this.state.pilihan_2,
            pilihan_3: this.state.pilihan_3,
            pilihan_4: this.state.pilihan_4,
            question: this.state.question,
            jawaban: this.state.jawaban,
        };

        console.log(soal);
        if (this.state.nama_mapel == "") {
            alert("Mata Pelajaran tidak boleh kosong!")
        } else if (this.state.question == "") {
            alert("Soal tidak boleh kosong!")
        } else if (this.state.pilihan_1 == "") {
            alert("Pilihan 1 tidak boleh kosong!")
        } else if (this.state.pilihan_2 == "") {
            alert("Pilihan 2 tidak boleh kosong!")
        } else if (this.state.pilihan_3 == "") {
            alert("Pilihan 3 tidak boleh kosong!")
        } else if (this.state.pilihan_4 == "") {
            alert("Pilihan 4 tidak boleh kosong!")
        } else if (this.state.jawaban == "") {
            alert("Jawaban tidak boleh kosong!")
        } else {
            fetch(`http://localhost:8080/addSoal`, {
            method: "POST",
            body: JSON.stringify(soal),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status == 200) {
                    alert("Berhasil Membuat Soal!")
                }
            })
        }
    }

    render() {
        return (
            <>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Buat Soal</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <select className="form-control" name="nama_mapel" id="nama_mapel" required onChange={this.handleChange}>
                                        <option selected disabled>~ Mata Pelajaran ~</option>
                                        <option value="Matematika">Matematika</option>
                                        <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                                        <option value="Bahasa Inggris">Bahasa Inggris</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control" placeholder="Soal" name="question" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text">A</label>
                                    </div>
                                    <textarea type="text" className="form-control" placeholder="Pilihan 1" name="pilihan_1" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text">B</label>
                                    </div>
                                    <textarea type="text" className="form-control" placeholder="Pilihan 2" name="pilihan_2" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text">C</label>
                                    </div>
                                    <textarea type="text" className="form-control" placeholder="Pilihan 3" name="pilihan_3" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text">D</label>
                                    </div>
                                    <textarea type="text" className="form-control" placeholder="Pilihan 4" name="pilihan_4" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group form-group">
                                    <select className="custom-select" name="jawaban" required onChange={this.handleChange}>
                                        <option selected disabled>Jawaban</option>
                                        <option name="pilihan_1">A</option>
                                        <option name="pilihan_2">B</option>
                                        <option name="pilihan_3">C</option>
                                        <option name="pilihan_3">D</option>
                                    </select>
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
