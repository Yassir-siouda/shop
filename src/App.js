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
    onLogin(formData.username);
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div style={styles.loginForm}>
      {isLoggedIn ? (
        <div>
          <p>Bienvenue, {formData.username}!</p>
          <button style={styles.logoutButton} onClick={handleLogout}>
            Déconnexion
          </button>
        </div>
      ) : (
        <div>
          <h2 style={styles.formTitle}>Login</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.formLabel}>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                style={styles.input}
              />
            </label>
            <br />
            <label style={styles.formLabel}>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                style={styles.input}
              />
            </label>
            <br />
            <button type="submit" style={styles.submitButton}>
              Login
            </button>
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
    this.setState({ username: user, isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ username: '', isLoggedIn: false });
  };

  render() {
    return (
      <div style={styles.appContainer}>
        <h1>Connexion</h1>
        <LoginForm
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
          isLoggedIn={this.state.isLoggedIn}
        />
      </div>
    );
  }
}

const styles = {
  appContainer: {
    textAlign: 'center',
    margin: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  loginForm: {
    maxWidth: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  formTitle: {
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formLabel: {
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    boxSizing: 'border-box',
  },
  submitButton: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  logoutButton: {
    backgroundColor: '#d9534f',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default App;
