import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function TopSearchSelect() {
    const [datatable] = React.useState({
        columns: [
            {
                label: 'ID',
                field: 'id',
                width: 100,
            },
            {
                label: 'Nama Siswa',
                field: 'nama',
                width: 200,
            },
            {
                label: 'Username',
                field: 'username',
                width: 200,
            },
            {
                label: 'Kelas',
                field: 'kelas',
                width: 200,
            },
        ],
        rows: [
            {
                id: '1',
                nama: 'Samuel Marsellino',
                username: 'samuel',
                kelas: 'Programming',
            },
            {
                id: '2',
                nama: 'Alvian Mangalik',
                username: 'alvian',
                kelas: 'Programming',
            },
            {
                id: '3',
                nama: 'Jansen Manuel',
                username: 'jansenmanuel',
                kelas: 'Programming',
            },
        ],
    });

    return (
        <>
            <div className="container my-5">
                <h2 className="font-weight-bold bluehead">Daftar Siswa</h2>
                <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={datatable}
                    pagingTop
                    searchTop
                    searchBottom={false}
                    className="border p-3"
                />
            </div>
        </>
    );
}