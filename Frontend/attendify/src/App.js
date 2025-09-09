
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function RequireAuth({ children }) {
const authed = !!localStorage.getItem('attendance_current_user');
return authed ? children : <Navigate to="/login" replace />;
}


export default function App() {
return (
  <div className="app-root">
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard/*"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
    </Routes>
  </div>
);
}