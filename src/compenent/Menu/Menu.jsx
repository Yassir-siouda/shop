import React, { useState, useEffect } from 'react';
import supabase from '../../supabase'; // Assurez-vous que le chemin est correct

const AffichageBDD = () => {
  const [donnees, setDonnees] = useState([]);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from('Connexion').select('*');
      if (error) {
        throw error;
      }
      setDonnees(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error.message);
      setErreur(error.message);
    }
  };

  return (
    <div>
      <h2>Affichage de la base de données</h2>
      {erreur && <div style={{ color: 'red' }}>{erreur}</div>}
      <ul>
        {donnees.map((element, index) => (
          <li key={index}>{JSON.stringify(element)}</li>
        ))}
      </ul>
    </div>
  );
};

export default AffichageBDD;
