import React, { useState } from 'react';
import axios from 'axios';


const CreateReport = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza la petición POST al servidor de API para crear un nuevo tipo de reporte
    axios.post('http://localhost:3000/reports', {
        title,
        description,
    })
      .then((response) => {
        console.log('Proyecto creado exitosamente:', response.data);
        // Realizar acciones adicionales si es necesario
      })
      .catch((error) => {
        console.error('Error al crear el proyecto:', error);
        // Realizar acciones adicionales si es necesario
      });

    // Reinicia los valores de los campos del formulario
    setTitle('');
    setDescription('');
  };

  return (
    <div className="container">
      <h2>Crear Reporte</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>
    </div>
  );
};

export default CreateReport;
