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
                label: 'Nama Kelas',
                field: 'kelas',
                width: 200,
            },
            {
                label: 'Nama Mapel',
                field: 'mapel',
                width: 200,
            },
            {
                label: 'Nama Modul',
                field: 'modul',
                width: 200,
            },
        ],
        rows: [
            {
                id: '1',
                kelas: 'X',
                mapel: 'Matematika',
                modul: 'Aljabar',
            },
            {
                id: '2',
                kelas: 'XI',
                mapel: 'Bahasa Indonesia',
                modul: 'Puisi',
            },
            {
                id: '3',
                kelas: 'XII',
                mapel: 'Bahasa Inggris',
                modul: 'Grammar',
            },
        ],
    });

    return (
        <>
            <div className="container my-5">
                <h2 className="font-weight-bold bluehead">Daftar Materi</h2>
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