import React, { Component } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
const jwtDecode = require('jwt-decode');

const token = localStorage.getItem("jwtToken");
let decodeToken = '';
if (token != null) {
     decodeToken = jwtDecode(token);
     console.log(decodeToken);
}
const datatable = {
    columns: [
        {
            label: 'ID',
            field: 'id',
            width: 100,
        },
        {
            label: 'Nama Siswa',
            field: 'nama_siswa',
            width: 200,
        },
        {
            label: 'Nama Mapel',
            field: 'nama_mapel',
            width: 200,
        },
        {
            label: 'Nilai',
            field: 'nilai',
            width: 200,
        },
    ],
    rows: [],
}

export default class TopSearchSelect extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showData: null,
            rows: [],
            kelas: decodeToken.aud
        }
    }
    getAllAccount() {
        
    }
   
    componentDidMount() {
        console.log(this.state.kelas)
        fetch(`http://localhost:8080/jawabanByKelas/${this.state.kelas}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            this.setState({
                data: response
            })      
          })
        .catch(console.error)

        setTimeout(() => {
            this.state.data.forEach(data => {
                datatable.rows.push(data)
            })

            const temp = <MDBDataTableV5
                            hover
                            entriesOptions={[5, 20, 25]}
                            entries={5}
                            pagesAmount={4}
                            data={datatable}
                            pagingTop
                            searchTop
                            searchBottom={false}
                            className="border p-3"
                        />;
            this.setState({
                showData: temp
            })
        }, 100);

     }

    render() {
        return (
            <>
                <div className="container my-5">
                    <h2 className="font-weight-bold bluehead">Daftar Nilai</h2>
                    {this.state.showData}
                </div>
            </>
        );
    }
}