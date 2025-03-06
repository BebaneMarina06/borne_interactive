import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Correction : 'Link' au lieu de 'link'
import './App.css'; 
import Canal1 from './Canal1'; 
import artelLogo from './assets/images/airtel.png';
import moovLogo from './assets/images/moov.png';
import Credits  from './credits_recharge/credits'

// Composant App
const App = () => {
  return (
    <Router>
      {/* Routes pour les différentes pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/Canal1" element={<Canal1 />} />
        <Route path="/seeg" element={<SeegPage />} />
        <Route path="/mobile-money" element={<MobileMoneyPage />} />
        <Route path="/pmug" element={<PmugPage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
      </Routes>
    </Router>
  );
};

// Page d'accueil
const Home = () => {
  return (
    <div className="container">
      <div className="card">
        {/* Header */}
        <div className="header">
          <img
            src="https://storage.googleapis.com/a1aa/image/HSZgyh_--77CNUNCIrQvCyHWY2KjvwIVj8o0daWLJKI.jpg"
            alt="Logo"
          />
          <span>Bienvenue</span>
        </div>

        {/* Background Video Section */}
        <div className="video">
          <video loop muted autoPlay className="video">
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Icon Buttons */}
          <div className="icon-grid">
            <Link to="/credits">
              <button className="icon-button" style={{ backgroundColor: "#FFFF" }}>
                <div class="airtel-moov">
                  <img src={artelLogo} alt="Logo-airtel" />
                  <img src={moovLogo} alt="Logo-moov" />
                </div>
                <span>crédit de communication</span>
              </button>
            </Link>
            <Link to="/seeg"> {/* Lien vers la page SEEG */}
              <button className="icon-button" style={{ backgroundColor: "#032906" }}>
                <i className="fas fa-wifi"></i>
                <span>SEEG</span>
              </button>
            </Link>
            <Link to="/mobile-money"> {/* Lien vers la page Mobile Money */}
              <button className="icon-button" style={{ backgroundColor: "#dc3545" }}>
                <i className="fas fa-phone-alt"></i>
                <span>recharge mobile money</span>
              </button>
            </Link>
            <Link to="/pmug"> {/* Lien vers la page PMUG */}
              <button className="icon-button" style={{ backgroundColor: "#032906" }}>
                <i className="fab fa-paypal"></i>
                <span>PMUG</span>
              </button>
            </Link>
            <Link to="/restaurant"> {/* Lien vers la page Restaurant */}
              <button className="icon-button" style={{ backgroundColor: "#020c35" }}>
                <i className="fas fa-utensils"></i>
                <span>RESTAURANT</span>
              </button>
            </Link>
            <Link to="/Canal1"> {/* Lien vers la page Restaurant */}
              <button className="icon-button" style={{ backgroundColor: "#020c35" }}>
                <i className="fas fa-utensils"></i>
                <span>Canal</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <span>© 2023 Your Company. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

// Pages pour chaque service
// const CreditPage = () => <h2>Page Crédit de communication</h2>;
const SeegPage = () => <h2>Page SEEG</h2>;
const MobileMoneyPage = () => <h2>Page Recharge Mobile Money</h2>;
const PmugPage = () => <h2>Page PMUG</h2>;
const RestaurantPage = () => <h2>Page Restaurant</h2>;

export default App;