import React, { useState } from "react";
import { bookAppointment } from "./services/user-service";
import { getCurrentUserEmail, isLoggedIn } from "./services/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from './assets/vsms-logo.jpg';

const Booking = () => {
  const [form, setForm] = useState({
    vehicleType: '',
    serviceType: '',
    appointmentDate: '',
    remarks: ''
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.vehicleType || !form.serviceType || !form.appointmentDate) {
      toast.error('Please fill in all required fields.');
      setError('Please fill in all required fields.');
      setSuccess('');
      return;
    }

    if (!isLoggedIn()) {
      navigate("/login");
      return;
    }

    const appointmentData = {
      email: getCurrentUserEmail(),
      vehicleType: form.vehicleType,
      serviceType: form.serviceType,
      appointmentDate: form.appointmentDate,
      remarks: form.remarks
    };

    try {
      await bookAppointment(appointmentData);
      toast.success('Appointment booked successfully!');
      setSuccess('Appointment booked successfully!');
      setError('');
      setForm({ vehicleType: '', serviceType: '', appointmentDate: '', remarks: '' });
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      console.error(err);
      toast.error('Failed to book appointment. Please try again.');
      setError('Failed to book appointment. Please try again.');
      setSuccess('');
    }
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
          background: '#E8E8E8',
          border: '1.5px solid #e0e0e0',
          boxShadow: '0 6px 32px 0 rgba(44,62,80,0.10), 0 1.5px 4px 0 rgba(44,62,80,0.08)'
        }}
        onSubmit={handleSubmit}
      >
        <div className="text-center mb-3">
          <img src={logo} alt="VSMS Logo" style={{ height: 60, borderRadius: 8, marginBottom: 8 }} />
          <h3 className="mb-2" style={{ color: '#232526', fontWeight: 700, letterSpacing: 1 }}>Book a Service Appointment</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 8 }}>
            Please fill in the details below to book your vehicle service appointment.
          </div>
        </div>
        {error && <div className="alert alert-danger py-2">{error}</div>}
        {success && <div className="alert alert-success py-2">{success}</div>}

        <div className="mb-3">
          <label htmlFor="vehicleType" className="form-label" style={{ fontWeight: 500 }}>Vehicle Type</label>
          <select
            className="form-select"
            name="vehicleType"
            value={form.vehicleType}
            onChange={handleChange}
            required
            style={{ background: '#fff', borderRadius: 6 }}
          >
            <option value="">Select</option>
            <option value="Suzuki-Swift">Suzuki-Swift</option>
            <option value="Suzuki-Dezire">Suzuki-Dezire</option>
            <option value="Suzuki-WagonR">Suzuki-WagonR</option>
            <option value="Suzuki-Baleno">Suzuki-Baleno</option>
            <option value="Suzuki-Fronx">Suzuki-Fronx</option>
            <option value="Suzuki-Brezza">Suzuki-Brezza</option>
            <option value="Suzuki-Vitara/Grand Vitara">Suzuki-Vitara/Grand Vitara</option>
            <option value="Suzuki-Celerio">Suzuki-Celerio</option>
            <option value="Suzuki-Alto">Suzuki-Alto</option>
            <option value="Tata-Nexon">Tata-Nexon</option>
            <option value="Tata-Altroz">Tata-Altroz</option>
            <option value="Tata-Harrier">Tata-Harrier</option>
            <option value="Tata-Safari">Tata-Safari</option>
            <option value="Tata-Tiago">Tata-Tiago</option>
            <option value="Tata-Punch">Tata-Punch</option>
            <option value="Mahindra-Thar">Mahindra-Thar</option>
            <option value="Mahindra-Bolero">Mahindra-Bolero</option>
            <option value="Mahindra-Scorpio/N">Mahindra-Scorpio/N</option>
            <option value="Mahindra-XUV700">Mahindra-XUV700</option>
            <option value="Mahindra-XUV300/3XO">Mahindra-XUV300/3XO</option>  
            <option value="Mahindra-XUV500">Mahindra-XUV500</option>
            <option value="Skoda-Kushaq">Skoda-Kushaq</option>
            <option value="Skoda-Slavia">Skoda-Slavia</option>
            <option value="Skoda-Octavia">Skoda-Octavia</option>
            <option value="Skoda-Superb">Skoda-Superb</option>
            <option value="Skoda-Kodiaq">Skoda-Kodiaq</option>
            <option value="Skoda-Rapid">Skoda-Rapid</option>
            <option value="Hyundai-Creta">Hyundai-Creta</option>
            <option value="Hyundai-Verna">Hyundai-Verna</option>
            <option value="Hyundai-Creta">Hyundai-Creta</option>
            <option value="Hyundai-Santro">Hyundai-Santro</option>
            <option value="Hyundai-Venue">Hyundai-Venue</option>
            <option value="Hyundai-i10/i20">Hyundai-i10/i20</option>
            <option value="Volkswagen-Vento">Volkswagen-Vento</option>
            <option value="Volkswagen-Polo">Volkswagen-Polo</option>
            <option value="Volkswagen-Tiguan">Volkswagen-Tiguan</option>
            <option value="Volkswagen-Virtus">Volkswagen-Virtus</option>
            <option value="Volkswagen-Ameo">Volkswagen-Ameo</option>
            <option value="Volkswagen-Passat">Volkswagen-Passat</option>
            <option value="Toyota-Innova">Toyota-Innova</option>
            <option value="Toyota-Fortuner">Toyota-Fortuner</option>
            <option value="Toyota-Hyrider">Toyota-Hyrider</option>
            <option value="Toyota-Hycross">Toyota-Hycross</option>
            <option value="Kia-Seltos">Kia-Seltos</option>
            <option value="Kia-Carnival">Kia-Carnival</option>
            <option value="Kia-Carens">Kia-Carens</option>
            <option value="Kia-Sonnet">Kia-Sonnet</option>
            <option value="Honda-City">Honda-City</option>
            <option value="Royal Enfield-Bullet 350">Royal Enfield-Bullet 350</option>
            <option value="Royal Enfield-Classic 350">Royal Enfield-Classic 350</option>
            <option value="Royal Enfield-Himalayan">Royal Enfield-Himalayan</option>
            <option value="Royal Enfield-Meteor 350">Royal Enfield-Meteor 350</option>
            <option value="Royal Enfield-Hunter 350">Royal Enfield-Hunter 350</option>
            <option value="Truck-6 wheeler">Truck-6 wheeler</option>
            <option value="Truck-10 wheeler">Truck-10 wheeler</option>
            <option value="Truck-12 wheeler">Truck-12 wheeler</option>
            <option value="Truck-16 wheeler">Truck-16 wheeler</option>
            <option value="Other Four Wheeler">Other Four Wheeler</option>
            <option value="Other Two Wheeler">Other Two Wheeler</option>
            <option value="Other Heavy Duty Vehicle">Other Heavy Duty Vehicle</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="serviceType" className="form-label" style={{ fontWeight: 500 }}>Service Type</label>
          <select
            className="form-select"
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            required
            style={{ background: '#fff', borderRadius: 6 }}
          >
            <option value="">Select</option>
            <option value="Regular Servicing">Regular Servicing</option>
            <option value="Tyre Change">Tyre Change</option>
            <option value="Vehicle Wash">Vehicle Wash</option>
            <option value="Engine Oil Change">Engine Oil Change</option>
            <option value="Brake Service">Brake Service</option>  
            <option value="Battery Replacement">Battery Replacement</option>
            <option value="AC Service">AC Service</option>
            <option value="Suspension Repair">Suspension Repair</option>
            <option value="Transmission Service">Transmission Service</option>
            <option value="Other Service">Other Service</option>

          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="appointmentDate" className="form-label" style={{ fontWeight: 500 }}>Date</label>
          <input
            type="date"
            className="form-control"
            name="appointmentDate"
            value={form.appointmentDate}
            onChange={handleChange}
            required
            style={{ background: '#fff', borderRadius: 6 }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="remarks" className="form-label" style={{ fontWeight: 500 }}>Remarks</label>
          <textarea
            className="form-control"
            name="remarks"
            value={form.remarks}
            onChange={handleChange}
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
          Book
        </button>
        <button
          type="button"
          className="btn btn-secondary w-100 mt-2"
          style={{
            borderRadius: 6,
            fontWeight: 500
          }}
          onClick={() => navigate('/')}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Booking;