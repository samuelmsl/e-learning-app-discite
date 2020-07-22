import React, { Component } from 'react';
// import './index.css'

const token = "eyJhbGciOiJIsakdjasdjUzI1NiJ9.eyJzdWIiOiJhbHZpYW4yMDEiLCJwYXNzd29yZCI6ImFsdmlhbmlhbjIwMSIsImlzcyI6InNpc3dhIiwiZXhwIjoxNTk1NDM5OTE3LCJpYXQiOjE1OTUzMTk5MTcsImp0aSI6IjIiLCJ1c2VybmFtZSI6ImFsdmlhbjIwMSJ9.91MMn8Ri8M-2hZNW5W0QHNdICBn0-g4aPC3sV2FFv94";
class Soal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            soal: [],
            jawabanMurid: [],
            jawabanBenar: [],
            totalBenar: 0,
            showNilai: null,
            mapel: 'Matematika',
            kelas: "SMA 2"
        }
    } 

    getAllSoal = () => {
        const reqSoal = {
            nama_kelas: this.state.kelas,
            nama_mapel: this.state.mapel
        }

        fetch("http://localhost:8080/soalByNama", {
            method: "POST",
            body: JSON.stringify(reqSoal),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
                console.log(response)
                this.setState({
                    soal: response
                })
            })
            .catch(console.error)
    }

    submitJawaban = () => {
        const hasil = [];
        const jawabanBenar = this.state.jawabanBenar;
        const jawabanMurid = this.state.jawabanMurid;
        
        console.log(this.state.jawabanMurid)
        
        for (let i = 0; i < jawabanBenar.length; i++) {
            if (jawabanBenar[i] == jawabanMurid[i]) {
                hasil.push(jawabanMurid[i]);
            }
        }
        
        
        setTimeout(() => {
            this.setState({
                totalBenar: hasil.length
            })

            const reqJawaban = {
                nilai: this.state.totalBenar,
                account: {
                    id: 1
                },
                kelas: {
                    id: 1
                },
                mapel: {
                    id: 1
                }
            }

            fetch("http://localhost:8080/addJawaban", {
                method: "POST",
                body: JSON.stringify(reqJawaban),
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if (res.status == 200) {
                        alert("Jawaban Berhasil Disimpan")
                    } 
                })
                .catch(console.error)
                
                const showNilaiTemp = <div style={{marginLeft: 75, marginTop: 30}}>
                    <h4>Nilai</h4>
                    <h4 style={{color: "green"}}>{this.state.totalBenar}/{this.state.soal.length}</h4>
                </div>;

            this.setState({
                showNilai: showNilaiTemp
            })
        }, 100);
     }

    isiJawaban = (val, index) => {
        this.state.jawabanMurid[index] = val.target.value;
    }

    componentDidMount() {
        this.getAllSoal()
     }
    

     render() {
        return (
            <div>
                {this.state.soal.map((data, key) => {
                    this.state.jawabanBenar.push(data.jawaban)
                    return (
                        <div className="soalContainer" key={key}>
                            <div className="soalbox">
                                <p>{data.question}</p>
                                <div>
                                    <label>
                                        <input type="radio" name={key} value="pilihan_1" onClick={val => this.isiJawaban(val, key)}/>
                                        A. {data.pilihan_1}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name={key} value="pilihan_2" onClick={val => this.isiJawaban(val, key)}/>
                                        B. {data.pilihan_2}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name={key} value="pilihan_3" onClick={val => this.isiJawaban(val, key)}/>
                                        C. {data.pilihan_3}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name={key} value="pilihan_4" onClick={val => this.isiJawaban(val, key)}/>
                                        D. {data.pilihan_4}
                                    </label>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <button type="button" className="btn btn-success" style={{marginLeft: 75}} onClick={this.submitJawaban}>Submit</button>
                {this.state.showNilai}
             </div>
        );
    }
}

export default Soal;