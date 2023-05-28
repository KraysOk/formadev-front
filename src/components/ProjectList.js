import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Obtener la lista de proyectos desde la API
    axios.get('http://localhost:3000/projects')
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de proyectos:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="mt-4">Lista de Proyectos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.PROJ_ID}>
              <td>{project.PROJ_NAME}</td>
              <td>{project.PROJ_DESCRIPTION}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
