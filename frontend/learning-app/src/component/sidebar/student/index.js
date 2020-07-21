import React, { Component } from 'react';
import Ava from "../../img/avaprofil.png"

class SidebarStudent extends Component {
    // state = {  }
    render() {
        return (
            <>
                {/* <div class="d-flex" id="wrapper"> */}
                <div class="bg-light col-md-2 bluehead" id="sidebar-wrapper" style={{ left: "0", top: "0", height: "800px" }}>
                    <div class="list-group list-group-flush mt">
                        <div className="d-flex justify-content-center mt-4">
                            <img src={Ava} width="70" height="70"></img>
                            <h4 className="mt-2 ml-3">Jansen Manuel</h4>
                        </div>
                        <a href="#" class="list-group-item list-group-item-action bg-light bluehead">Dashboard</a>
                        <a href="#" class="list-group-item list-group-item-action bg-light bluehead">Daftar Materi</a>
                        <a href="#" class="list-group-item list-group-item-action bg-light bluehead">Daftar Soal</a>
                    </div>
                </div>
                {/* </div> */}
            </>
        );
    }
}

export default SidebarStudent;