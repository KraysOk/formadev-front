import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExampleWithRowspan = () => {
    const rows = [
      {
        activity: {
          value: "Acople y traslado de Carro con Camioneta",
          tasks: [
            {
              task: {
                value: "Revisión de Carro e Hidrociclón",
                incidents: [
                  {
                    incident: {
                      value: "Revisión con motor de vehículo o hidrociclón encendido",
                    },
                  },
                  {
                    incident: {
                      value: "Intervenir Componentes de Equipo",
                    },
                  },
                ],
              },
            },
            {
              task: {
                value: "Posicionamiento de camioneta para acople de carro",
                incidents: [
                  {
                    incident: {
                      value: "Personal a pie en el área de posicionamiento",
                    },
                  },
                  {
                    incident: {
                      value: "Posicionamiento a velocidad inadecuada",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        activity: {
          value: "Recuperación de Salmuera con Hidrociclón",
          tasks: [
            {
              task: {
                value: "Despliegue / guardado de mangueras",
                incidents: [
                  {
                    incident: {
                      value: "Mangueras endurecidas por sal",
                    },
                  },
                  {
                    incident: {
                      value: "Piso con desniveles, pulposo, blando",
                    },
                  },
                ],
              },
            },
            {
              task: {
                value: "Acople de Mangueras",
                incidents: [
                  {
                    incident: {
                      value: "Exposición de manos / dedos",
                    },
                  },
                  {
                    incident: {
                      value: "Unión Storz mal estado",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ];
  
    return (
      <div className="container">
        <h2>Ejemplo de rowspan</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Actividad</th>
              <th>Tarea</th>
              <th>Incidente</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <React.Fragment key={index}>
                {row.activity.tasks.map((task, taskIndex) => (
                  <React.Fragment key={`${index}-${taskIndex}`}>
                    <tr>
                      {taskIndex === 0 && (
                        <td rowSpan={row.activity.tasks.length}>
                          {row.activity.value}
                        </td>
                      )}
                      <td>{task.task.value}</td>
                      <td className='p-0'>
                        {task.task.incidents &&
                          task.task.incidents.length > 0 &&
                          task.task.incidents.map((incident, incidentIndex) => (
                            <tr className="bordered-row">
                            <td key={`${index}-${taskIndex}-${incidentIndex}`}>
                              {incident.incident.value}
                            </td>
                            </tr>
                          ))}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ExampleWithRowspan;
  