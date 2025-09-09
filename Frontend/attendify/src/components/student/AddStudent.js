import React, { useState } from 'react';


export default function AddStudent(){
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [date, setDate] = useState('');
const [msg, setMsg] = useState('');


function handleAdd(e){
e.preventDefault();
if(!name || !phone || !date){ setMsg('Fill all fields'); return; }
const key = 'attendance_students';
const students = JSON.parse(localStorage.getItem(key) || '[]');
const exists = students.find(s=>s.phone===phone && s.date===date);
if(exists){ setMsg('Student with same roll in this class already exists'); return; }
students.push({ id: Date.now(), name, phone, date });
localStorage.setItem(key, JSON.stringify(students));
setMsg('Student added successfully');
setName(''); setPhone(''); setDate('');
}

return (
    <div className="card">
        <h4>Add Student</h4>
        <form onSubmit={handleAdd}>
            <div className="form-row">
                <label>Name</label>
                <input value={name} onChange={e=>setName(e.target.value)} />
            </div>
            <div className="form-row">
                <label>Phone Number</label>
                <input type='number' value={phone} onChange={e=>setPhone(e.target.value)} />
            </div>
            <div className="form-row">
                <label>Class</label>
                <input type='date' value={date} onChange={e=>setDate(e.target.value)} />
            </div>
            {msg && <div className="success">{msg}</div>}
            <div style={{marginTop:12}}>
                <button className="btn-primary" type="submit">Add Student</button>
            </div>
        </form>
    </div>
);
}
