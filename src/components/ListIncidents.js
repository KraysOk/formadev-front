import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListIncidents = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    // Obtener la lista de incidentes desde la API
    axios.get('http://localhost:3000/incidents')
      .then((response) => {
        setIncidents(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de incidentes:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Lista de Incidentes</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map(incident => (
            <tr key={incident.INCI_ID}>
              <td>{incident.INCI_ID}</td>
              <td>{incident.INCI_NAME}</td>
              <td>{incident.INCI_DESCRIPTION}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListIncidents;
