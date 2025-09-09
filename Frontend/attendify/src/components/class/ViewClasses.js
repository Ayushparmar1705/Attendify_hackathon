import React, { useEffect, useState } from 'react';


export default function ViewClasses(){
const [list, setList] = useState([]);
useEffect(()=> setList(JSON.parse(localStorage.getItem('attendance_classes') || '[]')), []);


function handleDelete(id){
if(!window.confirm('Delete class?')) return;
const filtered = list.filter(c=>c.id!==id);
localStorage.setItem('attendance_classes', JSON.stringify(filtered));
setList(filtered);
}


if(list.length===0) return <div className="card"><div className="empty">No classes created yet.</div></div>;

return (
    <div className="card">
        <h4>Classes</h4>
        <table className="table">
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {list.map(c => (
                    <tr key={c.id}>
                        <td>{c.name}</td>
                        <td>
                            <button className="btn-ghost1" onClick={() => handleDelete(c.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
}