import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Obtener la lista de actividades desde la API
    axios.get('http://localhost:3000/activities')
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de actividades:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Lista de Actividades</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity.ACTI_ID}>
              <td>{activity.ACTI_ID}</td>
              <td>{activity.ACTI_NAME}</td>
              <td>{activity.ACTI_DESCRIPTION}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListActivities;
