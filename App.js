import React, { useState } from 'react';
import './App.css';
import logo from './logo_sinfondo_xpanddev.png'; // Importa la imagen del logo
import codingBackground from './coding.jpg'; // Importa la imagen de fondo
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function App() {
  const [dropdown, setDropdown] = useState(false);

  const desplegar = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="App">
      <header className="Header navbar navbar-light bg-light">
        <img id="logo" src={logo} alt="Logo" />
        <span id="titulo" className="navbar-brand">XPerience & Development</span>
        <button id="btnMostrarMenu" className="navbar-toggler" type="button" onClick={desplegar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Dropdown isOpen={dropdown} toggle={desplegar}>
          <DropdownToggle caret>
            Menú
          </DropdownToggle>

          <DropdownMenu>
            <DropdownItem><button id="btnIniciarSesion" className="nav-item nav-link">Iniciar sesión</button></DropdownItem>
            <DropdownItem><button id="btnInscribirme" className="nav-item nav-link">Inscribirme</button></DropdownItem>
            <DropdownItem><button id="btnCourse" className="nav-item nav-link">Curso</button></DropdownItem>
            <DropdownItem><button id="btnContactanos" className="nav-item nav-link">Contáctanos</button></DropdownItem>
            <DropdownItem><button id="btnNosotros" className="nav-item nav-link">Nosotros</button></DropdownItem>
          </DropdownMenu>
        </Dropdown>

      </header>
      <div className="Body">
        <button id="button1" className="btn btn-primary">Botón 1</button>
        <button id="button2" className="btn btn-primary">Botón 2</button>
        <button id="button3" className="btn btn-primary">Botón 3</button>
        <button id="button4" className="btn btn-primary">Botón 4</button>
      </div>
    </div>
  );
}

export default App;
