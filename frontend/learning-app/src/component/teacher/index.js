import React, { Component } from 'react';
import "./app.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import TeacherDashboard from "../dashboard/teacherDashboard";


class Teacher extends Component {
    render() {
        return (

            <>
            <Navbar />
            <div class="d-flex " id="wrapper">
            <Sidebar />
            <TeacherDashboard />
            </div>
            </>
        );
    }
}

export default Teacher;