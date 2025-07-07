import React, { useState } from 'react';
import { signUP } from './services/user-service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import logo from './assets/vsms-logo.jpg';

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phoneNo: '',
    address: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  const phoneRegex = /^\d{10}$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!form.name || !form.email || !form.password || !form.phoneNo || !form.address) {
      toast.error('Please fill in all fields.');
      setError('Please fill in all fields.');
      return;
    }
    if (!passwordRegex.test(form.password)) {
      toast.error('Password must be at least 8 characters and include one uppercase, one lowercase, one number, and one special character.');
      //setError('Password must be at least 8 characters and include one uppercase, one lowercase, one number, and one special character.');
      return;
    }
    if (!phoneRegex.test(form.phoneNo)) {
      toast.error('Phone number must be exactly 10 digits.');
      //setError('Phone number must be exactly 10 digits.');
      return;
    }
    setError('');
    signUP(form)
      .then(data => {
        if (data) {
          toast.success('Registration successful! Please login to continue.');
          setForm({
            name: '',
            email: '',
            password: '',
            phoneNo: '',
            address: ''
          });
          navigate('/login');
        }
      })
      .catch(err => {
        console.error(err);
        setError('Registration failed. Please try again.');
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
          maxWidth: 500,
          width: '100%',
          background: '#E8E8E8', // Light grey background for the form
          border: '1.5px solid #e0e0e0',
          boxShadow: '0 6px 32px 0 rgba(44,62,80,0.10), 0 1.5px 4px 0 rgba(44,62,80,0.08)'
        }}
        onSubmit={handleSubmit}
      >
        <div className="text-center mb-3">
          <img src={logo} alt="VSMS Logo" style={{ height: 60, borderRadius: 8, marginBottom: 8 }} />
          <h3 className="mb-2" style={{ color: '#232526', fontWeight: 700, letterSpacing: 1 }}>Register</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 8 }}>Create your VSMS account</div>
        </div>
        {error && <div className="alert alert-danger py-2">{error}</div>}
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{ fontWeight: 500 }}>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={{ background: '#fff', borderRadius: 6 }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ fontWeight: 500 }}>Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
            style={{ background: '#fff', borderRadius: 6 }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" style={{ fontWeight: 500 }}>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            style={{ background: '#fff', borderRadius: 6 }}
          />
          <div className="form-text" style={{ fontSize: 13 }}>
            Must be at least 8 characters and include one uppercase, one lowercase, one number, and one special character.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNo" className="form-label" style={{ fontWeight: 500 }}>Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNo"
            name="phoneNo"
            value={form.phoneNo}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
            maxLength={10}
            style={{ background: '#fff', borderRadius: 6 }}
          />
          <div className="form-text" style={{ fontSize: 13 }}>
            Must be exactly 10 digits.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label" style={{ fontWeight: 500 }}>Address</label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter address"
            required
            rows={2}
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
          Register
        </button>
        <div className="text-center mt-3" style={{ fontSize: 14 }}>
          <span>Already have an account? </span>
          <a href="/login" className="text-decoration-none" style={{ color: '#232526', fontWeight: 500 }}>
            Login
          </a>
        </div>
      </form>
    </div>
  );
}

export default Register;