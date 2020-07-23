import React, { Component } from 'react'
const jwtDecode = require('jwt-decode');

const token = localStorage.getItem("jwtToken");
let decodeToken = '';
if (token != null) {
    decodeToken = jwtDecode(token);
}
 
export default class BuatModul extends Component {
    state = {
        selectedFile: null,
        kelas: decodeToken.aud,
        mapel: '',
        judul: '',
        url: '',
    }

 
     handleChange = event => {
        this.setState(
            { 
                [event.target.name]: event.target.value
            }
        );
    }

    handleFile = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    handleSubmit = () => {
        const values = this.state.url.split("watch?v=")
        const finalUrl = `${values[0]}embed/${values[1]}`

        const formData = new FormData();
        formData.append('files',this.state.selectedFile)
        formData.append('mapel',this.state.mapel)
        formData.append('kelas',this.state.kelas)
        formData.append('url',finalUrl)
        formData.append('judul',this.state.judul)


       if (formData != null) {
            fetch(`http://localhost:8080/uploadFile`, {
                method: "POST",
                body: formData,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                    if (res.status == 200) {
                        alert("Berhasil Membuat Modul!")
                    }
            })
            .catch(err => console.log(err))
        }
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
                                 <div className="form-group">
                                    <input type="file" class="form-control-file h6"  onChange={this.handleFile}/>
                                </div>
                                <div className="form-group">
                                    <select className="form-control" name="mapel" id="nama_mapel" onChange={this.handleChange}>
                                        <option selected disabled>~ Nama Mapel ~</option>
                                        <option value="Matematika">Matematika</option>
                                        <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                                        <option value="Bahasa Inggris">Bahasa Inggris</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="judul" id="nama_modul" placeholder="Nama Modul" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="kelas" id="nama_modul" placeholder="Nama Kelas" disabled required value={this.state.kelas}/>
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control" name="url" id="url" placeholder="URL Materi" required onChange={this.handleChange} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Kembali</button>
                                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Simpan</button>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
