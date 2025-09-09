import React, { useEffect, useState } from 'react';


export default function ViewStudents(){
const [students, setStudents] = useState([]);


useEffect(()=>{
const list = JSON.parse(localStorage.getItem('attendance_students') || '[]');
setStudents(list);
},[]);


function handleDelete(id){
if(!window.confirm('Delete this student?')) return;
const list = JSON.parse(localStorage.getItem('attendance_students') || '[]');
const filtered = list.filter(s=>s.id!==id);
localStorage.setItem('attendance_students', JSON.stringify(filtered));
setStudents(filtered);
}


if(students.length===0) return <div className="card"><div className="empty">No students added yet.</div></div>;

return (
    <div className="card">
        <h4>Students</h4>
        <div className="list">
            <table className="table">
                <thead>
                    <tr><th>Name</th><th>Phone</th><th>Date</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    {students.map(s=> (
                        <tr key={s.id}>
                            <td>{s.name}</td>
                            <td>{s.phone}</td>
                            <td>{s.date}</td>
                            <td><button className="btn-ghost1" onClick={()=>handleDelete(s.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
}
