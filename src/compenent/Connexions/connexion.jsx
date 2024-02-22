import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import supabase from '../../supabase';
import './connexion.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('Connexion')
        .select('email, password')
        .eq('email', email)
        .single();

      if (error) {
        throw error;
      }

      if (data && data.password === password) {
        console.log('Connexion réussie pour:', data.email);
        setIsLoggedIn(true);
      } else {
        throw new Error('Identifiants incorrects');
      }
    } catch (error) {
      console.error('Erreur de connexion:', error.message);
      setError('Erreur de connexion. Veuillez vérifier vos identifiants.');
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/menu" />;
  }

  return (
    <div className="login-page">
      <div className="form-section">
        <div className="form-container">
          <h1 className="form-title">Connexion</h1>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Adresse mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="action-group">
              <button type="submit" className="submit-btn">Je me connecte</button>
              <p className="alternative-action">Pas encore de compte ? <a href="/inscriptions" className="link">S'inscrire</a></p>
            </div>
          </form>
        </div>
      </div>
      <div className="background-image-section"></div>
    </div>
  );
};

export default LoginPage;
