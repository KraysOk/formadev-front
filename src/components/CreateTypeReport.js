import React, { useState } from 'react';
import axios from 'axios';

const CreateTypeReport = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza la petición POST al servidor de API para crear un nuevo tipo de reporte
    axios.post('http://localhost:3000/type_reports', {
      name,
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
    setName('');
    setDescription('');
  };

  return (
    <div className="container">
      <h2 className="mt-4">Crear Tipo de Reporte</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descripción:</label>
          <input
            type="text"
            id="description"
            className="form-control"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>
    </div>
  );
};

export default CreateTypeReport;
