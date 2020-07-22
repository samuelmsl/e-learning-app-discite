import React, { Component } from 'react'
import PDFObject from 'pdfobject';
import android from './android.pdf'
const jwtDecode = require('jwt-decode');

const token = localStorage.getItem("jwtToken");
let decodeToken = '';
if (token != null) {
     decodeToken = jwtDecode(token);
}
export default class student extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            materi: [],
            kelas: decodeToken.aud,
            mapel: decodeURIComponent(this.getUrlVars()["mapel"]),
            judul: decodeURIComponent(this.getUrlVars()["judul"]),
            showMateri: null,
            showPdf: null
        }
    } 
    
    getUrlVars = () => {
        const vars = {};
        const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }


    async getMateri() {
        const reqModulByJudul = {
            nama_kelas: this.state.kelas,
            nama_mapel: this.state.mapel,
            nama_modul: this.state.judul
        }

        await fetch("http://localhost:8080/modulByJudul", {
            method: "POST",
            body: JSON.stringify(reqModulByJudul),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
                console.log(response)
                this.setState({
                    materi: response
                })
            })
            .catch(console.error)
        const materiTemp = <>
                <center>
                    <iframe width="560" height="345" src={this.state.materi[0].url} frameBorder="0" allowFullScreen></iframe>
                </center>
                <h4><u>{this.state.materi[0].nama_modul}</u></h4>
            </>;
 
            const blobData = this.state.materi[0].data;
            this.blobToFile(blobData)
         this.setState({
            showMateri: materiTemp
         })
        
     }

    blobToFile = blobData => {
        const byteCharacters = atob(blobData);
        let binaryLen = byteCharacters.length;
        let bytes = new Uint8Array(binaryLen);

        for (let i = 0; i < binaryLen; i++) {
            let ascii = byteCharacters.charCodeAt(i);
            bytes[i] = ascii;
        }

        var blob = new Blob([bytes], { type: 'application/pdf' });
        var fileURL = URL.createObjectURL(blob);
        PDFObject.embed(fileURL, `#pdf`);
    }

    componentDidMount() {
        this.getMateri(); 
    }

    render() {
        return (
            <>
                <div class="card mx-auto col-8 mt-3">
                    <div class="card-header">
                        Materi
                    </div>  
                    <div class="card-body ">
                        {this.state.showMateri}
                        <div style={{ width: "100%", height: "100%", border: "none"}} className = "pdf-model" id="pdf" />
                    </div>
                </div>
            </>
        )
    }
}