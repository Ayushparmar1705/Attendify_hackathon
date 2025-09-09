import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Register() {
const [identifier, setIdentifier] = useState('');
const [password, setPassword] = useState('');
const [confirm, setConfirm] = useState('');
const [error, setError] = useState('');
const [success, setSuccess] = useState('');
const navigate = useNavigate();


function validateIdentifier(value) {
// Allow email or phone (10 digits)
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^\d{10}$/;
return emailRe.test(value) || phoneRe.test(value);
}

function handleRegister(e) {
e.preventDefault();
setError('');
setSuccess('');
if (!identifier || !password || !confirm) {
setError('Please fill all fields');
return;
}
if (!validateIdentifier(identifier)) {
setError('Enter a valid email or 10-digit phone number');
return;
}
if (password.length < 6) {
setError('Password should be at least 6 characters');
return;
}
if (password !== confirm) {
setError('Passwords do not match');
return;
}
// store in localStorage
const users = JSON.parse(localStorage.getItem('attendance_users') || '[]');
const exists = users.find(u => u.identifier === identifier);
if (exists) {
setError('User with this email/phone already exists');
return;
}
const newUser = { identifier, password, createdAt: Date.now() };
users.push(newUser);
localStorage.setItem('attendance_users', JSON.stringify(users));
setSuccess('Registration successful! Redirecting to login...');
setTimeout(() => navigate('/login'), 900);
}


return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 style={{ marginTop: 0 }}>Register</h2>
        <form onSubmit={handleRegister}>
            <div className="form-row">
                <label>Email</label>
                <input value={identifier} onChange={e=>setIdentifier(e.target.value)} placeholder="you@example.com" />
            </div>
            <div className="form-row">
                <label>Password</label>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            </div>
            <div className="form-row">
                <label>Confirm Password</label>
                <input type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} />
            </div>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
            <div style={{marginTop:12, justifyContent:"center", display:"flex"}}>
                <button className="btn-primary" type="submit">Create account</button>
                <button type="button" className="btn-ghost1" style={{marginLeft:8}} onClick={()=>{setIdentifier(''); setPassword(''); setConfirm(''); setError('');}}>Reset</button>
            </div>
        </form>
        <div className="auth-footer">
            <p>Already have an account? <Link style={{color:"blue"}} to="/login">Login</Link></p>
        </div>
        </div>
    </div>
);
}