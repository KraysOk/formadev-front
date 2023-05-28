import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactDataGrid from 'react-data-grid';
import 'react-data-grid/lib/styles.css';
import './ReportDetails.css';
import ButtonCorner from './ButtonCorner';

const ReportDetails = () => {
  const { reportId } = useParams();
  const [report, setReport] = useState(null);
  const [activities, setActivities] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    // Obtener el reporte desde la API
    axios
      .get(`http://localhost:3000/reports/${reportId}`)
      .then((response) => {
        setReport(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener el reporte:', error);
      });

    // Obtener la lista de actividades desde la API
    axios
      .get('http://localhost:3000/activities')
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de actividades:', error);
      });

    // Obtener la lista de tareas desde la API
    axios
      .get('http://localhost:3000/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de tareas:', error);
      });

    // Obtener la lista de incidentes desde la API
    axios
      .get('http://localhost:3000/incidents')
      .then((response) => {
        setIncidents(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de incidentes:', error);
      });
  }, [reportId]);

  if (!report) {
    return <div>Loading...</div>;
  }

 {/* 
  // Obtén todas las tareas y actividades correspondientes
  const taskActivityMap = tasks.reduce((map, task) => {
    const activity = activities.find((activity) => activity.ACTI_ID === task.ACTI_ID);
    map[task.TASK_ID] = {
      taskName: task.TASK_NAME,
      activityName: activity ? activity.ACTI_NAME : '',
      incidents: [],
    };
    return map;
  }, {});

  // Agrupa los incidentes por tarea
  incidents.forEach((incident) => {
    if (incident.TASK_ID in taskActivityMap) {
      taskActivityMap[incident.TASK_ID].incidents.push(incident);
    }
  });


  // Mapea los incidentes a objetos con las columnas requeridas
  const rows = Object.keys(taskActivityMap).flatMap((taskId) => {
    const taskData = taskActivityMap[taskId];
    return taskData.incidents.map((incident, index) => {
      return {
        taskId,
        taskName: index === 0 ? taskData.taskName : '',
        activityName: index === 0 ? taskData.activityName : '',
        incidentValue: incident.incident.value,
      };
    });
  });

*/}
  
 
  const activitiesRows = [];

  
    
 
    // Recorrer el array de actividades
activities.forEach((activity) => {
  // Obtener los datos de la actividad
  const { ACTI_ID, ACTI_NAME } = activity;

    // Crear un objeto con los datos de la actividad
  const activityObj =       {
      activity: {
        id: ACTI_ID,
        value: ACTI_NAME,
        tasks: [],
      },
    };

  // Filtrar los objetos que pertenecen a la categoría A
  console.log(tasks);
  const filteredTasks = tasks.filter((obj) => obj.ACTI_ID === ACTI_ID);
  // Imprimir los objetos filtrados
  filteredTasks.forEach((task) => {
    var taskObj = {
      task: {
        id: task.TASK_ID,
        value: task.TASK_NAME,
        incidents: [
        ],
      },
    };
    const filteredIncidents = incidents.filter((obj) => obj.TASK_ID === task.TASK_ID);
    filteredIncidents.forEach((incident) => {
      var incidentObj = {
        incident: {
          id: incident.INCI_ID,
          value: incident.INCI_NAME,
        },
      };
      taskObj.task.incidents.push(incidentObj);
    });
    activityObj.activity.tasks.push(taskObj);
  });


  activitiesRows.push(activityObj);
});


  // Definir las columnas de la tabla
  const columns = [
    { key: 'taskName', name: 'Tarea' },
    { key: 'activityName', name: 'Actividad' },
    { key: 'incidentValue', name: 'Incidente' },
  ];

  console.log(activitiesRows); 

  return (
    <div className="container">
      <div className="d-flex align-items-center border p-3 mb-4">
        <h2 className="mt-0 me-4">Detalles del Reporte: {report.TYRE_NAME}</h2>
        <h3 className="border-start ps-3">Reporte ID: {report.REPO_ID}</h3>
        <h4 className="border-start ps-3">Título: {report.REPO_TITLE}</h4>
      </div>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Actividad</th>
              <th>Tarea</th>
              <th>Incidente</th>
            </tr>
          </thead>
          <tbody> 
          {activitiesRows.map((row, index) => (
              <React.Fragment key={index}>
                {row.activity.tasks.map((task, taskIndex) => (
                  <React.Fragment key={`${index}-${taskIndex}`}>
                    <tr>
                      {taskIndex === 0 && (
                        <td rowSpan={row.activity.tasks.length} className="td-container">
                          {row.activity.id} - {row.activity.value}
                          <ButtonCorner/>
                        </td>
                      )}
                      <td>{task.task.id} - {task.task.value}<ButtonCorner/></td>
                      <td className='p-0'>
                        {task.task.incidents &&
                          task.task.incidents.length > 0 &&
                          task.task.incidents.map((incident, incidentIndex) => (
                            <tr className="bordered-row">
                            <td key={`${index}-${taskIndex}-${incidentIndex}`}>
                              {incident.incident.value}<ButtonCorner/>
                            </td>
                            </tr>
                          ))}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          {/* 
          {activitiesRows.map((row, index) => (
              <React.Fragment key={index}>
                {row.activity.tasks.map((task, taskIndex) => (
                  <React.Fragment key={`${index}-${taskIndex}`}>
                    <tr>
                      {taskIndex === 0 && (
                        <td rowSpan={row.activity.tasks.length}>
                          {row.activity.value}
                          1
                        </td>
                      )}
                      <td>2{task.value}</td>
                      <td className='p-0'>3
                        {task.incidents &&
                          task.incidents.length > 0 &&
                          task.incidents.map((incident, incidentIndex) => (
                            <tr className="bordered-row">
                            <td key={`${index}-${taskIndex}-${incidentIndex}`}>
                              {incident.incident.value} 4
                            </td>
                            </tr>
                          ))}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
            */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportDetails;
