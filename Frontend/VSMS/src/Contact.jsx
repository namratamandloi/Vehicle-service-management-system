import React, { useState } from 'react';
import { submitContactMessage } from './services/user-service';
import { toast } from 'react-toastify';
import logo from './assets/vsms-logo.jpg';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.');
      setError('Please fill in all fields.');
      setSuccess('');
      return;
    }

    try {
      const response = await submitContactMessage(form);
      if (response.status === 200 || response.status === 201) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setSuccess("Message sent successfully.");
        setError('');
      } else {
        toast.error("Something went wrong.");
        setError("Unexpected server response.");
      }
    } catch (error) {
      toast.error("Failed to send message.");
      setError("Failed to send message.");
      setSuccess('');
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row g-4 d-flex justify-content-center align-items-center">
        {/* Contact Form */}
        <div className="col-lg-6 d-flex justify-content-center">
          <form
            className="p-4 rounded-4 w-100"
            style={{
              background: '#E8E8E8',
              border: '1.5px solid #e0e0e0',
              boxShadow: '0 6px 32px 0 rgba(44,62,80,0.10), 0 1.5px 4px 0 rgba(44,62,80,0.08)',
              maxWidth: 420,
              margin: '0 auto'
            }}
            onSubmit={handleSubmit}
          >
            <div className="text-center mb-3">
              <img src={logo} alt="VSMS Logo" style={{ height: 60, borderRadius: 8, marginBottom: 8 }} />
              <h3 className="mb-2" style={{ color: '#232526', fontWeight: 700, letterSpacing: 1 }}>Contact Us</h3>
              <div style={{ color: '#888', fontSize: 15, marginBottom: 8 }}>
                Have questions or need help? Fill out the form below and our team will assist you as soon as possible.
              </div>
            </div>
            {error && <div className="alert alert-danger py-2">{error}</div>}
            {success && <div className="alert alert-success py-2">{success}</div>}

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
                placeholder="Enter your email"
                required
                style={{ background: '#fff', borderRadius: 6 }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label" style={{ fontWeight: 500 }}>Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={4}
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
              Send Message
            </button>
          </form>
        </div>

        {/* Our Office Info */}
        <div className="col-lg-6 d-flex justify-content-center">
          <div
            className="p-4 rounded-4 w-100"
            style={{
              background: '#E8E8E8',
              border: '1.5px solid #e0e0e0',
              boxShadow: '0 6px 32px 0 rgba(44,62,80,0.10), 0 1.5px 4px 0 rgba(44,62,80,0.08)',
              maxWidth: 420,
              margin: '0 auto'
            }}
          >
            <h4 className="mb-3 text-center" style={{ color: '#232526', fontWeight: 700 }}>Our Office</h4>
            <p style={{ fontSize: 15, color: '#232526' }}>
              <strong>Vehicle Service Management System</strong><br />
              1st Floor, VSMS Building<br />
              Pune-Nagar Road, Pune, Maharashtra - 411014<br />
              India
            </p>
            <p style={{ fontSize: 15, color: '#232526' }}>
              <strong>Email:</strong> support@vsms.com<br />
              <strong>Phone:</strong> +91 99999 99999<br />

            </p>
            <p style={{ fontSize: 14, color: '#555' }}>
              Office Hours: Mon - Sat: 9:00 AM to 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;