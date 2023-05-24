import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ReportDetails = () => {
    const { reportId } = useParams();
    const [report, setReport] = useState(null);
    const [activities, setActivities] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState('');
    const [newActivity, setNewActivity] = useState('');
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState('');
  
  useEffect(() => {
    // Obtener el reporte desde la API
    axios.get(`http://localhost:3000/reports/${reportId}`)
      .then((response) => {
        setReport(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener el reporte:', error);
      });
      
    // Obtener la lista de actividades desde la API
    axios.get('http://localhost:3000/activities')
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de actividades:', error);
      });
      
    // Obtener la lista de tareas desde la API
    axios.get('http://localhost:3000/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de tareas:', error);
      });
  }, [reportId]);

  const handleActivitySelect = (event) => {
    setSelectedActivity(event.target.value);
  };
  
  const handleNewActivityChange = (event) => {
    setNewActivity(event.target.value);
  };
  
  const handleTaskSelect = (event) => {
    setSelectedTask(event.target.value);
  };
  
  const assignExistingActivity = () => {
    // Realizar la asignación de la actividad existente al reporte
    // mediante una solicitud POST a la API
    axios.post(`http://localhost:3000/reports/${reportId}/activities`, {
      activityId: selectedActivity
    })
      .then((response) => {
        // Actualizar el estado o realizar acciones adicionales si es necesario
        console.log('Actividad asignada exitosamente:', response.data);
      })
      .catch((error) => {
        console.error('Error al asignar la actividad:', error);
      });
  };
  
  const createNewActivity = () => {
    // Realizar la creación de una nueva actividad y asignarla al reporte
    // mediante una solicitud POST a la API
    axios.post(`http://localhost:3000/reports/${reportId}/activities`, {
      name: newActivity
    })
      .then((response) => {
        // Actualizar el estado o realizar acciones adicionales si es necesario
        console.log('Actividad creada y asignada exitosamente:', response.data);
      })
      .catch((error) => {
        console.error('Error al crear y asignar la actividad:', error);
      });
  };

  if (!report) {
    return <div>Loading...</div>;
  }

  return (
<div className="container">
  <div className="d-flex align-items-center border p-3 mb-4">
    <h2 className="mt-0 me-4">Detalles del Reporte</h2>
    <h3 className="border-start ps-3">Reporte ID: {report.REPO_ID}</h3>
    <h4 className="border-start ps-3">Título: {report.REPO_TITLE}</h4>
    <h4 className="border-start ps-3">Descripción: {report.REPO_DESCRIPTION}</h4>
  </div>

  
  <h4 className="mt-4">Actividades:</h4>
  <ul className="list-group">
    {activities.map(activity => (
      <li key={activity.ACTI_ID} className="list-group-item">
        {activity.ACTI_NAME}
      </li>
    ))}
  </ul>
  
  <h4 className="mt-4">Agregar Actividad:</h4>
  <div className="mb-3">
    <select className="form-select" value={selectedActivity} onChange={handleActivitySelect}>
      <option value="">Seleccione una actividad existente</option>
      {activities.map(activity => (
        <option key={activity.ACTI_ID} value={activity.ACTI_ID}>{activity.ACTI_NAME}</option>
      ))}
    </select>
    <button className="btn btn-primary" onClick={assignExistingActivity} disabled={!selectedActivity}>Asignar</button>
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" value={newActivity} onChange={handleNewActivityChange} placeholder="Nombre de la nueva actividad" />
    <button className="btn btn-primary" onClick={createNewActivity} disabled={!newActivity}>Crear y Asignar</button>
  </div>
</div>
  );
};

export default ReportDetails;
