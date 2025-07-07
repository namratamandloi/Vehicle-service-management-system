import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
import Booking from './Booking';
import MyAppointments from './MyAppointments';
import AdminDashboard from './AdminDashboard';
import AllUsers from './admin pages/AllUsers';
import AllMessages from './admin pages/AllMessages';
import AllAppointments from './admin pages/AllAppointments';

import './App.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <Router>
      <Navbar />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="container mt-5 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<Booking /> } />
          <Route path="/my-appointments" element={<MyAppointments /> } />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AllUsers />} />
          <Route path="/admin/messages" element={<AllMessages />} />
          <Route path="/admin/appointments" element={<AllAppointments />} />
           

          
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
