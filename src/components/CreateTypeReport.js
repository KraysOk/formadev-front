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
    <div>
      <h2>Crear Tipo de Reporte</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CreateTypeReport;
