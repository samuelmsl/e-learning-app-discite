import React, { Component } from 'react'
import Navbar from '../navbar'
import SidebarStudent from '../sidebar/student'
import StudentDashboard from '../dashboard/studentDashboard'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Soal from "../soal"

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
                            <Route path="/murid/soal" component={Soal} />
                        </Switch>
                    </Router>

                </div>
            </>
        )
    }
}
