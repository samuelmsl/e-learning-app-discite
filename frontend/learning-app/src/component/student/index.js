import React, { Component } from 'react'
import Navbar from '../navbar'
import SidebarStudent from '../sidebar/student'
import StudentDashboard from '../dashboard/studentDashboard'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Submapel from "../submapel"
import Soal from "../daftarsoal/"
import DaftarMateri from "../daftarmateri"
import Materi from '../materi/student';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './app.css';

// import Matematika from "../submapel/matematika"
// import BahasaIndonesia from "../submapel/bahasaIndonesia"
// import BahasaInggris from "../submapel/bahasaInggris"

class Student extends Component {
    render() {
        const { validToken, user } = this.props.security;
            if (user.iss != "murid") {
                return(
                    <Redirect to="/guru" />
                )
            }
        return (
            <>
                <Navbar />
                <div className="thismain d-flex " id="wrapper">
                    <SidebarStudent />
                    <Router>
                        <Switch>
                            <Route exact path="/murid" component={StudentDashboard} />
                            {/* <Route exact path="/murid/matematika" component={Matematika} />
                            <Route exact path="/murid/indonesia" component={BahasaIndonesia} />
                            <Route exact path="/murid/inggris" component={BahasaInggris} /> */}
                            <Route exact path="/murid/submapel" component={Submapel} />
                            <Route exact path="/murid/submapel/daftarsoal" component={Soal} />
                            <Route exact path="/murid/submapel/daftarmateri" component={DaftarMateri} />
                            <Route exact path="/murid/submapel/daftarmateri/materi" component={Materi} />
                        </Switch>
                    </Router>
                </div>
            </>
        )
    }
}

Student.propTypes = {
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps,
)(Student);