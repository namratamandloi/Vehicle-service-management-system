import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from './assets/vsms-logo.jpg';
import { isLoggedIn, doLogout } from './services/auth';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [role, setRole] = useState(localStorage.getItem("role"));

  const handleLogout = () => {
    doLogout(() => {
      setLoggedIn(false);
      setRole(null);
      navigate("/login");
    });
  };

  useEffect(() => {
    setLoggedIn(isLoggedIn());
    setRole(localStorage.getItem("role"));
  }, [location]);

  const isAdmin = role === "ADMIN";

  return (
    <header style={{ margin: 0, padding: 0 }}>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: '#505050',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1050,
          margin: 0,
          padding: 0,
          height: 60,
          borderBottom: '1.5px solid #444',
          width: '100%',
        }}
      >
        <div className="container-fluid" style={{ margin: 0, paddingLeft: 10, paddingRight: 10 }}>
          <Link className="navbar-brand d-flex align-items-center text-white" to="/" style={{ marginLeft: 0, fontSize: '1rem', whiteSpace: 'nowrap' }}>
            <img src={logo} alt="VSMS Logo" className="navbar-logo" style={{ height: 38, width: 'auto', marginRight: 10 }} />
            <span className="d-none d-md-inline ms-1" style={{ fontSize: '1.05rem' }}>VEHICLE SERVICE MANAGEMENT SYSTEM</span>
            <span className="d-inline d-md-none ms-1" style={{ fontSize: '1rem' }}>VSMS</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end text-white"
            id="navbarNav"
            style={{ backgroundColor: '#505050' }}>


            <ul className="navbar-nav flex-wrap">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact Us</Link>
              </li>

              {!loggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/register">Register</Link>
                  </li>
                </>
              )}

              {loggedIn && (
                <>
                  {isAdmin && (
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/admin">Admin Panel</Link>
                    </li>
                  )}
                  {!isAdmin && (
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/my-appointments">My Appointments</Link>
                    </li>
                  )}
                  <li className="nav-item">
                    <span className="nav-link text-white" style={{ cursor: "pointer" }} onClick={handleLogout}>
                      Logout
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from being hidden behind the fixed navbar */}
      <div style={{ height: '56px' }}></div>
    </header>
  );
}

export default Navbar;