import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#505050',
        color: 'white',
        width: '100%',
        padding: '20px 0 20px 0',
        marginTop: 'auto',
        position: 'relative',
        left: 0,
        right: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '100%', margin: 0, padding: 0 }}>
        <div className="row justify-content-between align-items-center" style={{ margin: 0, width: '100%' }}>
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0" style={{ paddingLeft: 24 }}>
            <h6 className="mb-2" style={{ fontWeight: 'bold' }}>
              Vehicle Service Management System (VSMS)
            </h6>
            <p className="mb-0 small">
              &copy; {new Date().getFullYear()} VSMS. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end" style={{ paddingRight: 24 }}>
            <nav
              className="d-flex flex-wrap justify-content-center justify-content-md-end gap-2 gap-md-3 small"
              style={{ rowGap: 8 }}
            >
              <Link to="/login" className="text-white text-decoration-none px-2">Login</Link>
              <Link to="/register" className="text-white text-decoration-none px-2">Register</Link>
              <Link to="/about" className="text-white text-decoration-none px-2">About Us</Link>
              <Link to="/contact" className="text-white text-decoration-none px-2">Contact Us</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;