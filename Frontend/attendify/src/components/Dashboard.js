import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from './Sidebar';
import AddStudent from './student/AddStudent';
import AddTeacher from './teacher/AddTeacher';
import ViewTeachers from './teacher/ViewTeachers';
import AddClass from './class/AddClass';
import ViewClasses from './class/ViewClasses';
import ViewStudents from './student/ViewStudent';


export default function Dashboard() {
const [open, setOpen] = useState(true);
const navigate = useNavigate();
const user = JSON.parse(localStorage.getItem('attendance_current_user') || 'null');


function handleLogout() {
localStorage.removeItem('attendance_current_user');
navigate('/login');
}

return (
    <div className="container">
        <div className="sidebar">
            <div className="logo">SikshaCount</div>
            <div style={{fontSize:13, color:'#9ca3af'}}>Welcome, {user?.identifier}</div>
            <Sidebar />
            <div style={{marginTop:50, }}>
                <button className="btn-ghost" onClick={handleLogout}>Logout</button>
            </div>
        </div>
        <div className="main">
            <div className="topbar">
                <h3>Dashboard</h3>
                <div>Auto Attendance System</div>
            </div>
            <Routes>
                <Route path="/" element={<div className="card">Select an option from the sidebar.</div>} />

                <Route path="dashboard" element={<Dashboard />} />

                <Route path="students/add" element={<AddStudent />} />
                <Route path="students/view" element={<ViewStudents />} />

                <Route path="teachers/add" element={<AddTeacher />} />
                <Route path="teachers/view" element={<ViewTeachers />} />


                <Route path="classes/add" element={<AddClass />} />
                <Route path="classes/view" element={<ViewClasses />} />


            </Routes>
        </div>
    </div>
);
}