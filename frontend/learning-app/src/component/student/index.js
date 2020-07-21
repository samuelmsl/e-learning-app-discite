import React, { Component } from 'react'
import Navbar from '../navbar'
import SidebarStudent from '../sidebar/student'
import StudentDashboard from '../dashboard/studentDashboard'

export default class index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div class="d-flex " id="wrapper">
                    <SidebarStudent />
                    <StudentDashboard />
                </div>
            </>
        )
    }
}
