import React, { Component } from 'react'
import Navbar from '../navbar'
import SidebarStudent from '../sidebar/student'
import StudentDashboard from '../dashboard/studentDashboard'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Submapel from "../submapel"
import Soal from "../soal"
// import Matematika from "../submapel/matematika"
// import BahasaIndonesia from "../submapel/bahasaIndonesia"
// import BahasaInggris from "../submapel/bahasaInggris"

export default class index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="d-flex " id="wrapper">
                    <SidebarStudent />
                    <Router>
                        <Switch>
                            <Route exact path="/murid" component={StudentDashboard} />
                            {/* <Route exact path="/murid/matematika" component={Matematika} />
                            <Route exact path="/murid/indonesia" component={BahasaIndonesia} />
                            <Route exact path="/murid/inggris" component={BahasaInggris} /> */}
                            <Route exact path="/murid/submapel" component={Submapel} />
                            <Route exact path="/murid/submapel/soal" component={Soal} />
                        </Switch>
                    </Router>
                </div>
            </>
        )
    }
}
