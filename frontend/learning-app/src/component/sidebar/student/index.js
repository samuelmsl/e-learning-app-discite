import React, { Component } from 'react';
import Ava from "../../img/avaprofil.png"

class SidebarStudent extends Component {
    // state = {  }
    render() {
        return (
            <>
                {/* <div className="d-flex" id="wrapper"> */}
                <div className="bg-light col-md-2 bluehead" id="sidebar-wrapper" style={{ left: "0", top: "0", height: "800px" }}>
                    <div className="list-group list-group-flush mt">
                        <div className="d-flex justify-content-center mt-4">
                            <img src={Ava} width="70" height="70" alt=""></img>
                            <h4 className="mt-2 ml-3">Jansen Manuel</h4>
                        </div>
                        <a href="/murid" className="list-group-item list-group-item-action bg-light bluehead">Dashboard</a>
                    </div>
                </div>
                {/* </div> */}
            </>
        );
    }
}

export default SidebarStudent;