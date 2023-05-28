import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import Dashboard from './pages/Dashboard';
import CreateProject from './components/CreateProjectForm';
import ProjectList from './components/ProjectList';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CreateTypeReport from './components/CreateTypeReport';
import ListTypeReports from './components/ListTypeReports';
import CreateReport from './components/CreateReport';
import ListReports from './components/ListReports';
import CreateIncident from './components/CreateIncident';
import CreateTask from './components/CreateTask';
import CreateActivity from './components/CreateActivity';
import ListIncidents from './components/ListIncidents';
import ListTasks from './components/ListTasks';
import ListActivities from './components/ListActivities';
import ReportDetails from './components/ReportDetails';
import Example from './components/Example';
import CombinedColumnsExample from './components/Example';
// Importa otros componentes necesarios, incluyendo el componente Dashboard

const App = () => {
  return (
  <Router>
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-12">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/crear-proyecto" element={<CreateProject />} />
                <Route path="/listar-proyectos" element={<ProjectList />} />
                <Route path="/crear-tipo-reporte" element={<CreateTypeReport />} />
                <Route path="/listar-tipo-reporte" element={<ListTypeReports />} />
                <Route path="/crear-reporte" element={<CreateReport />} />
                <Route path="/listar-reportes" element={<ListReports />} />
                <Route path="/crear-incidente" element={<CreateIncident />} />
                <Route path="/crear-tarea" element={<CreateTask />} />
                <Route path="/crear-actividad" element={<CreateActivity />} />
                <Route path="/listar-incidente" element={<ListIncidents />} />
                <Route path="/listar-tarea" element={<ListTasks />} />
                <Route path="/listar-actividad" element={<ListActivities />} />
                <Route path="/detalle-reporte/:reportId" element={<ReportDetails />} />
                {/* Agrega otras rutas y componentes de tu aplicación */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
