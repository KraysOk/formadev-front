import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="container">
      <h2>Lista de Tareas</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.TASK_ID}>
              <td>{task.TASK_ID}</td>
              <td>{task.TASK_NAME}</td>
              <td>{task.TASK_DESCRIPTION}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTasks;
