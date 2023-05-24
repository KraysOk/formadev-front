import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-dark">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/crear-proyecto" className="nav-link">Crear Proyecto</Link>
        </li>
        <li className="nav-item">
          <Link to="/listar-proyectos" className="nav-link">Listar Proyectos</Link>
        </li>
        <li className="nav-item">
          <Link to="/listar-tipo-reporte" className="nav-link">Listar Tipo Reportes</Link>
        </li>
        <li className="nav-item">
          <Link to="/crear-tipo-reporte" className="nav-link">Crear Tipo Reporte</Link>
        </li>
        <li className="nav-item">
          <Link to="/listar-reportes" className="nav-link">Listar Reportes</Link>
        </li>
        <li className="nav-item">
          <Link to="/crear-reporte" className="nav-link">Crear Reporte</Link>
        </li>
        <li className="nav-item">
          <Link to="/crear-incidente" className="nav-link">Crear Incidente</Link>
        </li>
        <li className="nav-item">
          <Link to="/crear-tarea" className="nav-link">Crear Tarea</Link>
        </li>
        <li className="nav-item">
          <Link to="/crear-actividad" className="nav-link">Crear Actividad</Link>
        </li>
        <li className="nav-item">
          <Link to="/listar-incidente" className="nav-link">Listar Incidente</Link>
        </li>
        <li className="nav-item">
          <Link to="/listar-tarea" className="nav-link">Listar Tarea</Link>
        </li>
        <li className="nav-item">
          <Link to="/listar-actividad" className="nav-link">Listar Actividad</Link>
        </li>
        <li className="nav-item">
          <Link to="/detalle-reporte/1" className="nav-link">Detalle Reporte</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
