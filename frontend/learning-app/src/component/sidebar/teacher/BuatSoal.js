import React, { Component } from 'react'

export default class BuatSoal extends Component {
    render() {
        return (
            <>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Buat Soal</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
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
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Kembali</button>
                            <button type="button" class="btn btn-primary">Simpan</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
