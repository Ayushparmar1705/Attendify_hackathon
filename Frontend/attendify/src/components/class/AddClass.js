import React, { useState } from 'react';


export default function AddClass(){
const [name, setName] = useState('');
const [msg, setMsg] = useState('');


function handleAdd(e){
e.preventDefault();
if(!name){ setMsg('Enter class name/grade'); return; }
const key = 'attendance_classes';
const items = JSON.parse(localStorage.getItem(key) || '[]');
const exists = items.find(c=>c.name===name);
if(exists){ setMsg('Class already exists'); return; }
items.push({ id: Date.now(), name });
localStorage.setItem(key, JSON.stringify(items));
setMsg('Class created');
setName('');
}

return (
    <div className="card">
        <h4>Add Class</h4>
        <form onSubmit={handleAdd}>
            <div className="form-row">
                <label>Class / Grade</label>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="e.g., 5 or 10" />
            </div>
            {/* <div className="form-row">
                <label>Section (optional)</label>
                <input value={section} onChange={e=>setSection(e.target.value)} placeholder="e.g., A" />
            </div> */}
            {msg && <div className="success">{msg}</div>}
            <div style={{marginTop:12}}>
                <button className="btn-primary" type="submit">Create Class</button>
            </div>
        </form>
    </div>
    );
}