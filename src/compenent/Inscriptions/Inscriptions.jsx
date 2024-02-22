import React from 'react';
import './Inscriptions.css'; // Make sure to import the CSS file

const Inscriptions = () => {
  return (
    <div className="login-page">
      <div className="login-section">
        <div className="login-container">
          <div className="login-logo">
            {/* Insert your logo here */}
            <img src="/path-to-your-logo.png" alt="Company Logo" />
          </div>
          <h1 className="login-title">Inscriptions</h1>
          <form className="login-form">
            <div className="input-group">
              <input type="email" placeholder="Adresse mail" required />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Mot de passe" required />
            </div>
            <button type="submit" className="login-button">Je me connecte</button>
            <div className="login-links">
              <a href="#" className="reset-password">Réinitialiser mon mot de passe</a>
              <a href="#" className="create-account">Pas encore de compte ?</a>
            </div>
          </form>
        </div>
      </div>
      <div className="image-section">
        {/* The image is added via CSS */}
      </div>
    </div>
  );
}

export default Inscriptions;
