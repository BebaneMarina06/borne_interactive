import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import pour la navigation
import './css/credits.css';
import artelLogo from '../assets/images/airtel.png';
import moovLogo from '../assets/images/moov.png';

const Credits = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate(); // Hook pour la navigation

  const handleNumberClick = (number) => {
    setPhoneNumber(prev => prev + number);
  };

  const handleValidate = () => {
    alert(`Numéro ${phoneNumber} rechargé avec succès!`);
    setPhoneNumber('');
  };

  const handleCancel = () => {
    navigate('/'); // Redirige vers la page principale (App.js)
  };

  return (
    <div className="recharge-interface">
      <div className="titre">
        <h1>Crédit de communication</h1>
        <div className="airtel-moov">
          <img src={artelLogo} alt="Logo-airtel" />
          <img src={moovLogo} alt="Logo-moov" />
        </div>
      </div>

      <div className="form-container">
        {/* Input du numéro */}
        <div className="phone-number">
          <p><strong>1</strong> - Entrer le numéro de téléphone à recharger</p>
          <input type="text" value={phoneNumber} readOnly placeholder="Numéro de téléphone" />
          
          <p><strong>2</strong> - Confirmez le numéro de téléphone</p>
          <input type="text" value={phoneNumber} readOnly placeholder="Numéro de téléphone" />
        </div>

        {/* Clavier numérique */}
        <div className="keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
            <button key={number} onClick={() => handleNumberClick(number)}>
              {number}
            </button>
          ))}
        </div>
      </div>

      {/* Boutons d'action */}
      <div className="actions">
        <button onClick={handleCancel}>Annuler</button>
        <button onClick={handleValidate}>Valider</button>
      </div>
    </div>
  );
};

export default Credits;
