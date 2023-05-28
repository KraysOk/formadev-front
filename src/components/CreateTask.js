import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = (activityCode) => {
  const [taskName, setTaskName] = useState('');

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Realizar la solicitud POST a la API
    axios.post('http://localhost:3000/tasks', {
      taskName,
      activityCode: activityCode.activityCode,
    })
      .then((response) => {
        console.log('Tarea creada exitosamente:', response.data);
        // Realizar acciones adicionales si es necesario
      })
      .catch((error) => {
        console.error('Error al crear la tarea:', error);
        // Realizar acciones adicionales si es necesario
      });

    // Restablecer los campos del formulario
    setTaskName('');
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Crear Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input type="text" className="form-control" id="taskName" value={taskName} onChange={handleTaskNameChange} />
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>
    </div>
  );
};

export default CreateTask;
