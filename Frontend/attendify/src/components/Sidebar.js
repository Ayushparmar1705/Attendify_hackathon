import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Sidebar(){
const [dashboardOpen, setDashboardOpen] = useState(false);
const [studentsOpen, setStudentsOpen] = useState(false);
const [teachersOpen, setTeachersOpen] = useState(false);
const [classesOpen, setClassesOpen] = useState(false);


return (
    <div className="nav-section">
        <div>
            <div className="nav-item" onClick={()=>setDashboardOpen(s=>!s)}><Link to="/dashboard" style={{color:'white', textDecoration:'none'}}>Dashboard</Link></div>
            
        </div>
        <div>
            <div className="nav-item" onClick={()=>setStudentsOpen(s=>!s)}>Students ▾</div>
            {studentsOpen && (
            <div className="dropdown">
                <div className="nav-item"><Link to="/dashboard/students/add" style={{color:'white', textDecoration:'none'}}>Add Student</Link></div>
                <div className="nav-item"><Link to="/dashboard/students/view" style={{color:'white', textDecoration:'none'}}>View Students</Link></div>
            </div>
        )}
        </div>

    <div style={{marginTop:8}}>
        <div className="nav-item" onClick={()=>setTeachersOpen(s=>!s)}>Teachers ▾</div>
        {teachersOpen && (
            <div className="dropdown">
                <div className="nav-item"><Link to="/dashboard/teachers/add" style={{color:'white', textDecoration:'none'}}>Add Teacher</Link></div>
                <div className="nav-item"><Link to="/dashboard/teachers/view" style={{color:'white', textDecoration:'none'}}>View Teachers</Link></div>
            </div>
        )}
    </div>

    <div style={{marginTop:8}}>
        <div className="nav-item" onClick={()=>setClassesOpen(s=>!s)}>Classes ▾</div>
        {classesOpen && (
            <div className="dropdown">
                <div className="nav-item"><Link to="/dashboard/classes/add" style={{color:'white', textDecoration:'none'}}>Add Class</Link></div>
                <div className="nav-item"><Link to="/dashboard/classes/view" style={{color:'white', textDecoration:'none'}}>View Classes</Link></div>
            </div>
        )}
        </div>
    </div>
);
}