import React, { Component } from 'react'
import PDFObject from 'pdfobject';
import android from './android.pdf'
 
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbHZpYW4yMDEiLCJwYXNzd29yZCI6ImFsdmlhbmlhbjIwMSIsImlzcyI6InNpc3dhIiwiZXhwIjoxNTk1NDM5OTE3LCJpYXQiOjE1OTUzMTk5MTcsImp0aSI6IjIiLCJ1c2VybmFtZSI6ImFsdmlhbjIwMSJ9.91MMn8Ri8M-2hZNW5W0QHNdICBn0-g4aPC3sV2FFv94";
export default class student extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            materi: [],
            kelas: 'SMA 2',
            mapel: 'Matematika',
            judul: 'Aljabar',
            showMateri: null,
            showPdf: null
        }
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
                this.setState({
                    materi: response
                })
            })

            console.log(this.state.materi)
        
        const materiTemp = <>
                <center>
                    <iframe width="560" height="345" src={this.state.materi[0].url} frameBorder="0" allowFullScreen></iframe>
                </center>
                <h4><u>{this.state.materi[0].nama_modul}</u></h4>
            </>;
            
            var file = new File([this.state.materi[0].data], "name");
            
            PDFObject.embed(file, `#pdf`);

         this.setState({
            showMateri: materiTemp
         })
        
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
                        <div style={{ width: "100%", height: "100%",}} className = "pdf-model" id="pdf" />
                    </div>
                </div>
            </>
        )
    }
}