import React, { useState } from 'react';
import { loginUser } from './services/user-service';
import { doLogin } from './services/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isAdmin } from './services/auth';
import logo from './assets/vsms-logo.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setError('');
    const loginData = { email, password };

    loginUser(loginData)
      .then((data) => {
        doLogin(data, () => {
          if (data.role === "ADMIN") {
            toast.success("Welcome Admin!");
            navigate("/admin");
          } else {
            toast.success("Login successful!");
            navigate("/");
          }
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Login failed. Please check your credentials.");
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        paddingTop: 40,
        paddingBottom: 160,
        background: 'none'
      }}
    >
      <form
        className="p-4 rounded-4"
        style={{
          minWidth: 340,
          maxWidth: 400,
          width: '100%',
          background: '#E8E8E8', // Light grey background for the form
          border: '1.5px solid #e0e0e0',
          boxShadow: '0 6px 32px 0 rgba(44,62,80,0.10), 0 1.5px 4px 0 rgba(44,62,80,0.08)'
        }}
        onSubmit={handleSubmit}
      >
        <div className="text-center mb-3">
          <img src={logo} alt="VSMS Logo" style={{ height: 60, borderRadius: 8, marginBottom: 8 }} />
          <h3 className="mb-2" style={{ color: '#232526', fontWeight: 700, letterSpacing: 1 }}>Login</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 8 }}>to Vehicle Service Management System</div>
        </div>
        {error && <div className="alert alert-danger py-2">{error}</div>}
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ fontWeight: 500 }}>Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter email"
            required
            autoFocus
            style={{ background: '#fff', borderRadius: 6 }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" style={{ fontWeight: 500 }}>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={{ background: '#fff', borderRadius: 6 }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-dark w-100 py-2"
          style={{
            fontWeight: 600,
            letterSpacing: 1,
            background: '#505050',
            border: 'none',
            borderRadius: 6,
          }}
        >
          Login
        </button>
        <div className="text-center mt-3" style={{ fontSize: 14 }}>
          <span>Don't have an account? </span>
          <a href="/register" className="text-decoration-none" style={{ color: '#232526', fontWeight: 500 }}>
            Register
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;