import React from 'react';
import { useNavigate } from 'react-router-dom';
import service_station1 from './assets/service_station1.jpg';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container pt-3 pb-5">
      {/* Title at the top */}
      <h2 className="text-center mt-3 mb-3" style={{ fontWeight: 700, letterSpacing: 1 }}>
        Admin Dashboard
      </h2>

      {/* Banner Image */}
      <div className="text-center mb-4">
        <img
          src={service_station1}
          alt="Service Station"
          style={{
            width: '100%',
            maxHeight: 330,
            objectFit: 'cover',
            borderRadius: 16,
            boxShadow: '0 4px 24px 0 rgba(44,62,80,0.10), 0 1.5px 4px 0 rgba(44,62,80,0.08)'
          }}
        />
      </div>

      {/* Functionality Card */}
      <div
        className="mx-auto p-4 rounded-4 shadow"
        style={{
          maxWidth: 500,
          background: '#E8E8E8',
          border: '1.5px solid #e0e0e0',
        }}
      >
        <h3 className="text-center mb-4" style={{ fontWeight: 700, letterSpacing: 1 }}>
          Functionality
        </h3>

        <div className="d-grid gap-4">
          <button
            className="btn btn-primary btn-lg"
            onClick={() => navigate('/admin/users')}
          >
            👥 View All Users
          </button>

          <button
            className="btn btn-success btn-lg"
            onClick={() => navigate('/admin/appointments')}
          >
            🛠️ Manage Appointments
          </button>

          <button
            className="btn btn-info btn-lg text-white"
            onClick={() => navigate('/admin/messages')}
          >
            📩 View Messages
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
