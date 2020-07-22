import React, { Component } from 'react';
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../navbar";
import SidebarTeacher from "../sidebar/teacher";
import TeacherDashboard from "../dashboard/teacherDashboard";
import Materi from "../materi/teacher";
import Modul from "../modul";
import DaftarSiswa from '../daftarsiswa'

class Teacher extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="d-flex " id="wrapper">
                    <SidebarTeacher />
                    <Router>
                        <Switch>
                            <Route exact path="/guru" component={TeacherDashboard} />
                            <Route path="/guru/daftarsiswa" component={DaftarSiswa} />
                            <Route exact path="/guru/materi" component={Materi} />
                            <Route path="/guru/guru/materi/modul" component={Modul} />
                            {/* <TeacherDashboard /> */}
                        </Switch>
                    </Router>
                </div>
                {/* <Route/> */}
            </>
        );
    }
}

export default Teacher;