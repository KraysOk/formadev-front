import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CreateProject from '../components/CreateProjectForm';

import axios from 'axios';
import ProjectList from '../components/ProjectList';

// Importa otros componentes necesarios
const Dashboard = () => {
    const [formularios, setFormularios] = useState([]);
  
    useEffect(() => {
      // Realiza una solicitud GET a la API para obtener los formularios del usuario
      axios.get('http://localhost:3000/usuarios')
        .then(response => {
          setFormularios(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    return (
      <div className="container-fluid">
      </div>
    );
  }
  
  export default Dashboard;
  