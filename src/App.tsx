import React, { useState } from 'react';
import './App.css';
import { crearAvion } from './turbina/avion';

function App() {
  const [infoAvion, setInfoAvion] = useState('');

  const handleCrearAvion = () => {
    const resultado = crearAvion();
    setInfoAvion(resultado);
  };

  return (
    <div className="container">
      <h1>Simulador de Avión</h1>
      <button onClick={handleCrearAvion}>Crear Avión</button>
      {infoAvion && <div className="resultado">{infoAvion}</div>}
    </div>
  );
}

export default App;
