import React, { Component } from 'react';

class Sidebar extends Component {
    // state = {  }
    render() {
        return (
            <>
                {/* <div class="d-flex" id="wrapper"> */}
                    <div class="bg-light col-md-2 bluehead" id="sidebar-wrapper" style = {{left:"0",top:"0", height:"800px"}}>
                        <div class="list-group list-group-flush mt">
                            <a href="#" class="list-group-item list-group-item-action bg-light bluehead">Dashboard</a>
                            <a href="#" class="list-group-item list-group-item-action bg-light bluehead">Daftar Materi</a>
                            <a href="#" class="list-group-item list-group-item-action bg-light bluehead">Daftar Siswa</a>
                        </div>
                    </div>
                {/* </div> */}
            </>
        );
    }
}

export default Sidebar;