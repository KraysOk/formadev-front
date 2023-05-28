import React, { useState, useEffect  } from 'react';
import axios from 'axios';


const CreateReport = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [typeReports, setTypeReports] = useState([]);
  const [selectedTypeReport, setSelectedTypeReport] = useState('');
  const [proyects, setProyects] = useState([]);
  const [selectedProyect, setSelectedProyect] = useState('');

  useEffect(() => {
    // Obtener la lista de tipos de reporte desde la API
    axios.get('http://localhost:3000/type_reports')
      .then((response) => {
        console.log(response.data);
        setTypeReports(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de tipos de reporte:', error);
      });

          // Obtener la lista de tipos de reporte desde la API
    axios.get('http://localhost:3000/projects')
    .then((response) => {
      console.log(response.data);
      setProyects(response.data);
    })
    .catch((error) => {
      console.error('Error al obtener la lista de tipos de reporte:', error);
    });
  }, []);

  const handleTypeReportSelect = (event) => {
    setSelectedTypeReport(event.target.value);
  };

  const handleProyectSelect = (event) => {
    setSelectedProyect(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedTypeReport);
    // Realiza la petición POST al servidor de API para crear un nuevo tipo de reporte
    axios.post('http://localhost:3000/reports', {
        title,
        description,
        typeReport: selectedTypeReport,
        project: selectedProyect,
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
    setSelectedTypeReport('');
    setSelectedProyect('');
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
        <div className="form-group">
          <label htmlFor="typeReport">Tipo de Reporte:</label>
          <select
            id="typeReport"
            className="form-control"
            value={selectedTypeReport}
            onChange={handleTypeReportSelect}
          >
            <option value="">Seleccione un tipo de reporte</option>
            {typeReports.map((typeReport ) => (
              <option key={typeReport.TYRE_ID} value={typeReport.TYRE_ID}>
                {typeReport.TYRE_NAME}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="proyect">Proyecto:</label>
          <select
            id="proyect"
            className="form-control"
            value={selectedProyect}
            onChange={handleProyectSelect}
          >
            <option value="">Seleccione un proyecto</option>
            {proyects.map((project ) => (
              <option key={project.PROJ_ID} value={project.PROJ_ID}>
                {project.PROJ_NAME}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>
    </div>
  );
};

export default CreateReport;
