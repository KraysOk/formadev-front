import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateIncident = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    // Obtener la lista de tareas desde la API
    axios.get('http://localhost:3000/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de tareas:', error);
      });
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar la solicitud POST a la API
    axios.post('http://localhost:3000/incidents', {
      name,
      task_id: document.getElementById('task').value,
    })
      .then((response) => {
        console.log('Incidente creado exitosamente:', response.data);
        // Realizar acciones adicionales si es necesario
      })
      .catch((error) => {
        console.error('Error al crear el incidente:', error);
        // Realizar acciones adicionales si es necesario
      });

    // Restablecer los campos del formulario
    setName('');
    setDescription('');
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Crear Incidente</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descripción:</label>
          <textarea className="form-control" id="description" value={description} onChange={handleDescriptionChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">Tarea:</label>
          <select id="task" className="form-control" onChange={handleTaskChange}>
            {tasks.map((task) => (
              <option key={task.TASK_ID} value={task.TASK_ID}>
                {task.TASK_NAME}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>
    </div>
  );
};

export default CreateIncident;
