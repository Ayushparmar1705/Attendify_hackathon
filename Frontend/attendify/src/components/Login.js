import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
const [identifier, setIdentifier] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();


function handleLogin(e) {
e.preventDefault();
setError('');
if (!identifier || !password) { setError('Fill all fields'); return; }
const users = JSON.parse(localStorage.getItem('attendance_users') || '[]');
const user = users.find(u => u.identifier === identifier && u.password === password);
if (!user) { setError('Invalid credentials'); return; }
localStorage.setItem('attendance_current_user', JSON.stringify({ identifier }));
navigate('/dashboard');
}

return (
    <div className="auth-wrapper">
        <div className="auth-card">
            <h2 style={{marginTop:0}}>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-row">
                    <label>Email</label>
                    <input value={identifier} onChange={e=>setIdentifier(e.target.value)} placeholder="you@example.com" />
                </div>
                <div className="form-row">
                    <label>Password</label>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                </div>
                {error && <div className="error">{error}</div>}
                <div style={{marginTop:12,display:"flex",flexDirection:"column"}}>
                    <button className="btn-primary" type="submit">Login</button>
                    <Link to="/register" style={{textAlign:"center",marginTop:10,color:"black"}}>Create account</Link>
                </div>
            </form>
        </div>
    </div>
);
}

