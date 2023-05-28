import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListReports = () => {
    const [Reports, setReports] = useState([]);

    useEffect(() => {
      // Obtener la lista de proyectos desde la API
      axios.get('http://localhost:3000/reports')
        .then((response) => {
            setReports(response.data);
        })
        .catch((error) => {
          console.error('Error al obtener la lista de proyectos:', error);
        });
    }, []);

  return (
    <div className="container">
      <h2>Lista de Reportes</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>TITULO</th>
            <th>TIPO REPORTE</th>
            <th>PROYECTO</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {Reports.map(report => (
            <tr key={report.REPO_ID}>
              <td>{report.REPO_ID}</td>
              <td>{report.REPO_TITLE}</td>
              <td>{report.TYRE_NAME}</td>
              <td>{report.PROJ_NAME}</td>
              <td>
                <Link to={`/detalle-reporte/${report.REPO_ID}`} className="btn btn-primary">
                  Ver detalle
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListReports;
