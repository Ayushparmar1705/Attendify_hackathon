import React, { useState } from 'react';


export default function AddTeacher(){
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [msg, setMsg] = useState('');


function handleAdd(e){
e.preventDefault();
if(!name || !email || !phone){ setMsg('Fill all fields'); return; }
const key = 'attendance_teachers';
const items = JSON.parse(localStorage.getItem(key) || '[]');
items.push({ id: Date.now(), name, email, phone });
localStorage.setItem(key, JSON.stringify(items));
setMsg('Teacher added');
setName(''); setEmail(''); setPhone('');
}

return (
    <div className="card">
        <h4>Add Teacher</h4>
        <form onSubmit={handleAdd}>
            <div className="form-row">
                <label>Name</label>
                <input value={name} onChange={e=>setName(e.target.value)} />
            </div>
            <div className="form-row">
                <label>Email</label>
                <input value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
            <div className="form-row">
                <label>Phone</label>
                <input value={phone} onChange={e=>setPhone(e.target.value)} />
            </div>
            {msg && <div className="success">{msg}</div>}
            <div style={{marginTop:12}}>
                <button className="btn-primary" type="submit">Add Teacher</button>
            </div>
        </form>
    </div>
    );
}