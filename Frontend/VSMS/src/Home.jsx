import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from './services/auth';

import service_station2 from './assets/service_station2.jpg';
import service_station3 from './assets/service_station3.jpg';
import service_station4 from './assets/service_station4.jpg';
import service_station5 from './assets/service_station5.jpg';
import service_station6 from './assets/service_station6.jpg';
import service_station7 from './assets/service_station7.jpg';


// Logos
import suzuki from './assets/suzuki.png';
import kia from './assets/Kia.png';
import toyota from './assets/Toyota.png';
import hyundai from './assets/Hyundai.png';
import tata from './assets/Tata.png';
import mahindra from './assets/Mahindra1.png';
import royalEnfield from './assets/Royal Enfield.jpeg';
import volkswagen from './assets/Volkswagen.png';
import honda from './assets/Honda.png';
import skoda from './assets/Skoda.png';

const logoStyle = {
  maxWidth: 100,
  maxHeight: 100,
  objectFit: 'contain',
  background: '#fff',
  borderRadius: 10,
  border: '1px solid #e0e0e0',
  padding: 8,
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  cursor: 'pointer'
};

const logoHoverStyle = {
  transform: 'scale(1.1)',
  boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
};

function Home() {
  const navigate = useNavigate();
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);

  const carouselImages = [
    { src: service_station3, alt: 'Car Studio' },
    { src: service_station4, alt: 'Workstation' },
    { src: service_station5, alt: 'Car Studio Interior' },
    { src: service_station6, alt: 'Workstation Interior' },
    { src: service_station7, alt: 'Car Studio Exterior' }
    
  ];

  const handlePrev = () => {
    setCarouselIdx((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIdx((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const logos = [suzuki, kia, toyota, hyundai, tata, mahindra, royalEnfield, volkswagen, honda, skoda];

  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      {/* Hero Section */}
      <div
        style={{
          minHeight: '80vh',
          backgroundImage: `url(${service_station2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff'
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1
          }}
        />

        {/* Content */}
        <div style={{ zIndex: 2 }}>
          <h1 style={{ fontWeight: 700, letterSpacing: 1, fontSize: '2.5rem', marginBottom: 12 }}>
            Welcome to VSMS
          </h1>
          <p style={{ fontSize: '1.1rem', maxWidth: 600, margin: 'auto', marginBottom: 24 }}>
            Book vehicle services with trusted brands, at your convenience.
          </p>
          <button
            onClick={() => {
              if (isLoggedIn()) {
                navigate('/booking');
              } else {
                navigate('/login');
              }
            }}
            className="btn btn-lg"
            style={{
              backgroundColor: '#505050',
              color: '#fff',
              fontWeight: 600,
              borderRadius: 8,
              padding: '10px 28px',
              fontSize: '1rem',
              border: 'none'
            }}
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* Logos Section */}
      <div className="container mb-2" style={{ marginTop: '90px' }}>
        {/* Reduced margin-bottom and margin-top */}
        <h3 className="text-center mb-3" style={{ color: '#232526', fontWeight: 700, letterSpacing: 1 }}>
          Companies We Service
        </h3>
        <div className="row justify-content-center align-items-center g-3">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="col-4 col-sm-3 col-md-2 d-flex justify-content-center align-items-center mb-2"
            >
              <img
                src={logo}
                alt="Company Logo"
                style={hoveredIdx === idx ? { ...logoStyle, ...logoHoverStyle } : logoStyle}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              />
            </div>
          ))}
        </div>
      </div>

      // ...existing code...

      {/* Carousel Section */}
      <div className="container mb-5" style={{ marginTop: '-100px' }}>
        {/* Negative margin-top to reduce space between logos and carousel title */}
        <h3 className="text-center mb-4" style={{ color: '#232526', fontWeight: 700, letterSpacing: 1 }}>
          Glimpse of our Car Studio and Workstation
        </h3>
        <div className="d-flex justify-content-center align-items-center" style={{ position: 'relative', minHeight: 420 }}>
          <button
            className="btn btn-light"
            style={{
              position: 'absolute',
              left: 0,
              zIndex: 2,
              top: '50%',
              transform: 'translateY(-50%)',
              borderRadius: '50%',
              width: 48,
              height: 48,
              fontSize: 26,
              opacity: 0.7
            }}
            onClick={handlePrev}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <img
            src={carouselImages[carouselIdx].src}
            alt={carouselImages[carouselIdx].alt}
            style={{
              width: '100%',
              maxWidth: 800,
              minHeight: 350,
              maxHeight: 420,
              borderRadius: 20,
              boxShadow: '0 6px 32px 0 rgba(44,62,80,0.13), 0 1.5px 4px 0 rgba(44,62,80,0.10)',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          <button
            className="btn btn-light"
            style={{
              position: 'absolute',
              right: 0,
              zIndex: 2,
              top: '50%',
              transform: 'translateY(-50%)',
              borderRadius: '50%',
              width: 48,
              height: 48,
              fontSize: 26,
              opacity: 0.7
            }}
            onClick={handleNext}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
        {/* Carousel indicators */}
        <div className="d-flex justify-content-center mt-3">
          {carouselImages.map((img, idx) => (
            <span
              key={idx}
              onClick={() => setCarouselIdx(idx)}
              style={{
                display: 'inline-block',
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: carouselIdx === idx ? '#505050' : '#ccc',
                margin: '0 7px',
                cursor: 'pointer',
                border: '1px solid #888'
              }}
            />
          ))}
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="container mb-5">
        <h3 className="text-center mb-4" style={{ color: '#232526', fontWeight: 700, letterSpacing: 1 }}>
          What Our Customers Say
        </h3>
        <div className="row justify-content-center g-4">
          {/* Review 1 */}
          <div className="col-md-3 col-sm-6">
            <div className="p-3 rounded-4 shadow-sm h-100" style={{ background: '#fff', border: '1px solid #e0e0e0' }}>
              <div className="mb-2" style={{ color: '#FFD700', fontSize: 20 }}>
                ★★★★★
              </div>
              <p style={{ fontSize: 15, color: '#232526' }}>
                "Excellent service and very professional staff. My car feels brand new after every visit!"
              </p>
              <div className="fw-bold mt-2" style={{ color: '#505050' }}>- Priya Sharma</div>
            </div>
          </div>
          {/* Review 2 */}
          <div className="col-md-3 col-sm-6">
            <div className="p-3 rounded-4 shadow-sm h-100" style={{ background: '#fff', border: '1px solid #e0e0e0' }}>
              <div className="mb-2" style={{ color: '#FFD700', fontSize: 20 }}>
                ★★★★☆
              </div>
              <p style={{ fontSize: 15, color: '#232526' }}>
                "Quick appointment booking and transparent pricing. Highly recommended for all car owners."
              </p>
              <div className="fw-bold mt-2" style={{ color: '#505050' }}>- Rahul Patil</div>
            </div>
          </div>
          {/* Review 3 */}
          <div className="col-md-3 col-sm-6">
            <div className="p-3 rounded-4 shadow-sm h-100" style={{ background: '#fff', border: '1px solid #e0e0e0' }}>
              <div className="mb-2" style={{ color: '#FFD700', fontSize: 20 }}>
                ★★★★★
              </div>
              <p style={{ fontSize: 15, color: '#232526' }}>
                "The best car studio in town! Friendly staff and great attention to detail."
              </p>
              <div className="fw-bold mt-2" style={{ color: '#505050' }}>- Sneha Kulkarni</div>
            </div>
          </div>
          {/* Review 4 */}
          <div className="col-md-3 col-sm-6">
            <div className="p-3 rounded-4 shadow-sm h-100" style={{ background: '#fff', border: '1px solid #e0e0e0' }}>
              <div className="mb-2" style={{ color: '#FFD700', fontSize: 20 }}>
                ★★★★☆
              </div>
              <p style={{ fontSize: 15, color: '#232526' }}>
                "Very satisfied with the service quality and timely delivery. Will visit again!"
              </p>
              <div className="fw-bold mt-2" style={{ color: '#505050' }}>- Amit Verma</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;