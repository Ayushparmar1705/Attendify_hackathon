import React, { useEffect, useState } from 'react';


export default function ViewTeachers(){
const [list, setList] = useState([]);
useEffect(()=>{
setList(JSON.parse(localStorage.getItem('attendance_teachers') || '[]'));
},[]);


function handleDelete(id){
if(!window.confirm('Delete teacher?')) return;
const filtered = list.filter(t=>t.id!==id);
localStorage.setItem('attendance_teachers', JSON.stringify(filtered));
setList(filtered);
}


if(list.length===0) return <div className="card"><div className="empty">No teachers added yet.</div></div>;

return (
    <div className="card">
        <h4>Teachers</h4>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {list.map(t => (
                    <tr key={t.id}>
                        <td>{t.name}</td>
                        <td>{t.email}</td>
                        <td>{t.phone}</td>
                        <td>
                            <button className="btn-ghost1" onClick={() => handleDelete(t.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}