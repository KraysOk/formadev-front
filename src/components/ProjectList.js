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
      <ul className="list-group">
        {projects.map((project) => (
          <li key={project.PROJ_ID} className="list-group-item">
            <strong>Nombre:</strong> {project.PROJ_NAME} | <strong>Descripción:</strong> {project.PROJ_DESCRIPTION}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
