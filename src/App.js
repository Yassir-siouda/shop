import React, { useState } from 'react';

const LoginForm = ({ onLogin, onLogout, isLoggedIn }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez votre logique d'authentification ici en utilisant formData
    onLogin(formData.username); // Appel de la fonction de connexion avec le nom d'utilisateur
  };

  const handleLogout = () => {
    // Ajoutez votre logique de déconnexion ici
    onLogout();
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Bienvenue, {formData.username}!</p>
          <button onClick={handleLogout}>Déconnexion</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      username: '',
    };
  }

  handleLogin = (user) => {
    // Ajoutez votre logique d'authentification ici
    this.setState({ username: user, isLoggedIn: true });
  };

  handleLogout = () => {
    // Ajoutez votre logique de déconnexion ici
    this.setState({ username: '', isLoggedIn: false });
  };

  render() {
    return (
      <div>
        <h1>Votre application</h1>
        <LoginForm
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
          isLoggedIn={this.state.isLoggedIn}
        />
      </div>
    );
  }
}

export default App;
