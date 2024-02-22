import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Connexion from './compenent/Connexions/connexion';
import Inscriptions from './compenent/Inscriptions/Inscriptions';
import Menu from './compenent/Menu/Menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/inscriptions" element={<Inscriptions />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
