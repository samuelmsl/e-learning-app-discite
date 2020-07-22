import React, { Component } from 'react'
import axios from 'axios'

export default class BuatSoal extends Component {
    state = {
        id: '',
        nama_mapel: '',
        nama_kelas: '',
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

    handleSubmit = event => {
        event.preventDefault();

        const soal = {
            id: this.state.id,
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

        axios.post(`http://localhost:8080/addSoal`, { soal })
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert('Berhasil menambah data!');
            })
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
                                    <input type="text" className="form-control" placeholder="ID" name="id" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Mata Pelajaran" name="nama_mapel" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Kelas" name="nama_kelas" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control" placeholder="Soal" name="question" onChange={this.handleChange} />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text">A</label>
                                    </div>
                                    <textarea type="text" className="form-control" placeholder="Pilihan 1" name="pilihan_1" onChange={this.handleChange} />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text">B</label>
                                    </div>
                                    <textarea type="text" className="form-control" placeholder="Pilihan 2" name="pilihan_2" onChange={this.handleChange} />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text">C</label>
                                    </div>
                                    <textarea type="text" className="form-control" placeholder="Pilihan 3" name="pilihan_3" onChange={this.handleChange} />
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text">D</label>
                                    </div>
                                    <textarea type="text" className="form-control" placeholder="Pilihan 4" name="pilihan_4" onChange={this.handleChange} />
                                </div>
                                <div className="form-group form-group">
                                    <select className="custom-select" name="jawaban" onChange={this.handleChange}>
                                        <option selected disabled>Jawaban</option>
                                        <option name="pilihan_1">A</option>
                                        <option name="pilihan_2">B</option>
                                        <option name="pilihan_3">C</option>
                                        <option name="pilihan_3">D</option>
                                    </select>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kembali</button>
                                    <button type="button" className="btn btn-primary" onSubmit={this.handleSubmit}>Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
