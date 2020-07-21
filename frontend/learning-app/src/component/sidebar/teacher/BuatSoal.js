import React, { Component } from 'react'

export default class BuatSoal extends Component {
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
                                    <input type="text" className="form-control" placeholder="ID" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Mata Pelajaran" />
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control" placeholder="Soal" />
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control" placeholder="Pilihan 1" />
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control" placeholder="Pilihan 2" />
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control" placeholder="Pilihan 3" />
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control" placeholder="Pilihan 4" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Jawaban" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Kembali</button>
                            <button type="button" className="btn btn-primary">Simpan</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
