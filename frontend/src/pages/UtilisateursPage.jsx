import React, { useEffect, useState } from 'react';

function UtilisateursPage() {
  const [utilisateurs, setUtilisateurs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/utilisateurs')
      .then(response => response.json())
      .then(data => setUtilisateurs(data))
      .catch(err => console.error('Error fetching utilisateurs:', err));
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {utilisateurs.map(utilisateur => (
          <li key={utilisateur.id}>
            Nom: {utilisateur.nom}, Age: {utilisateur.age}, Email: {utilisateur.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UtilisateursPage;
