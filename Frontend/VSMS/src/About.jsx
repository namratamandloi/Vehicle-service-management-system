import React from 'react';

// Replace these imports with your actual image paths
import dev1 from './assets/dev1.jpg';
import dev2 from './assets/dev1.jpg'; // Replace with dev2.jpg
import dev3 from './assets/dev1.jpg'; // Replace with dev3.jpg
import piyush from './assets/piyush.jpg'; // Replace with actual image path
import namrata from './assets/namrata.jpg'; // Replace with actual image path
import ashutosh from './assets/ashutosh.jpg'; // Replace with actual image path

function About() {
  return (
    <div className="container mt-5">
      <div
        className="p-4 rounded-4 mx-auto mb-5"
        style={{
          minWidth: 340,
          maxWidth: 700,
          width: '100%',
          background: '#E8E8E8',
          border: '1.5px solid #e0e0e0',
          boxShadow: '0 6px 32px 0 rgba(44,62,80,0.10), 0 1.5px 4px 0 rgba(44,62,80,0.08)'
        }}
      >
        <h2 className="mb-3 text-center">About Us</h2>
        <p>
          <b>Vehicle Service Management System (VSMS)</b> is a platform designed to streamline and simplify the process of managing vehicle service appointments, records, and customer interactions. Our mission is to provide a seamless experience for both service providers and vehicle owners, ensuring transparency, efficiency, and satisfaction.
        </p>
        <p>
          Our dedicated team is committed to delivering the best possible service experience. Thank you for choosing VSMS!
        </p>
      </div>

      {/* Developers Section */}
      <div className="row mt-4 mb-4 justify-content-center">
        <div className="col-md-4 d-flex justify-content-center mb-4 mb-md-0">
          <div
            className="p-4 rounded-4 align-items-center"
            style={{
              width: 320,
              background: '#E8E8E8',
              border: '1.5px solid #e0e0e0',
              boxShadow: '0 6px 32px 0 rgba(44,62,80,0.10), 0 1.5px 4px 0 rgba(44,62,80,0.08)'
            }}
          >
            <img
              src={namrata}
              alt="Developer 1"
              className="rounded-circle mb-3"
              style={{ width: 110, height: 110, objectFit: 'cover', border: '3px solid #505050' }}
            />
            <h5 className="mb-1 text-center">Namrata Mandloi</h5>
            <p className="mb-1 text-muted text-center" style={{ fontSize: 15 }}>Frontend & UI</p>
            <p className="text-center" style={{ fontSize: 14 }}>Handles ReactJS development and user interface design.</p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center mb-4 mb-md-0">
          <div
            className="p-4 rounded-4 align-items-center"
            style={{
              width: 320,
              background: '#E8E8E8',
              border: '1.5px solid #e0e0e0',
              boxShadow: '0 6px 32px 0 rgba(44,62,80,0.10), 0 1.5px 4px 0 rgba(44,62,80,0.08)'
            }}
          >
            <img
              src={piyush}
              alt="Developer 2"
              className="rounded-circle mb-3"
              style={{ width: 110, height: 110, objectFit: 'cover', border: '3px solid #505050' }}
            />
            <h5 className="mb-1 text-center">Piyush Patil</h5>
            <p className="mb-1 text-muted text-center" style={{ fontSize: 15 }}>Backend & Database</p>
            <p className="text-center" style={{ fontSize: 14 }}>Responsible for backend APIs and database management.</p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div
            className="p-4 rounded-4 align-items-center"
            style={{
              width: 320,
              background: '#E8E8E8',
              border: '1.5px solid #e0e0e0',
              boxShadow: '0 6px 32px 0 rgba(44,62,80,0.10), 0 1.5px 4px 0 rgba(44,62,80,0.08)'
            }}
          >
            <img
              src={ashutosh}
              alt="Developer 3"
              className="rounded-circle mb-3"
              style={{ width: 110, height: 110, objectFit: 'cover', border: '3px solid #505050' }}
            />
            <h5 className="mb-1 text-center">Ashutosh Singh</h5>
            <p className="mb-1 text-muted text-center" style={{ fontSize: 15 }}>Testing & Deployment</p>
            <p className="text-center" style={{ fontSize: 14 }}>Ensures quality, testing, and deployment of the project.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;