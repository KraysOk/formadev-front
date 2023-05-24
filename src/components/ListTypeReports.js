import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListTypeReports = () => {
  const [typeReports, setTypeReports] = useState([]);

  useEffect(() => {
    // Obtener la lista de proyectos desde la API
    axios.get('http://localhost:3000/type_reports')
      .then((response) => {
        setTypeReports(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de proyectos:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Lista de Tipos de Reporte</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {typeReports.map(typeReport => (
            <tr key={typeReport.TYRE_ID}>
              <td>{typeReport.TYRE_ID}</td>
              <td>{typeReport.TYRE_NAME}</td>
              <td>{typeReport.TYRE_DESCRIPTION}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTypeReports;
