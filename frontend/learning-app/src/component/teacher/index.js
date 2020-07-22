import React, { Component } from 'react';
import "./app.css";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Navbar from "../navbar";
import SidebarTeacher from "../sidebar/teacher";
import TeacherDashboard from "../dashboard/teacherDashboard";
import Materi from "../materi/teacher";
import Modul from "../modul";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Teacher extends Component {
    render() {

        const { validToken, user } = this.props.security;
        if (user.iis != "guru") {
            return(
                <Redirect to="/murid" />
            )
        }

        return (
            <>
                <Navbar />
                <div className="d-flex " id="wrapper">
                    <SidebarTeacher />
                    <Router>
                        <Switch>
                            <Route exact path="/guru" component={TeacherDashboard} />
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

Teacher.propTypes = {
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps,
)(Teacher);