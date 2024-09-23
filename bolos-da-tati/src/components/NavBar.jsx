import React from 'react';
import logo from '../assets/logo.png'; 
import '../App.css';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo da empresa */}
        <a className="navbar-brand" href="./index.html">
          <img
            src={logo}
            id="logo"
            alt="logo da confeitaria"
            style={{ height: '70px' }} // Ajuste do tamanho do logo
          />
        </a>
        {/* Botão para navegação colapsável em dispositivos móveis */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Links de navegação */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="./index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./produtos.html">Produtos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./sobre.html">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./tati.html">Quem é a Tati</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./contatos.html">Contato</a>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-success" type="submit">Login</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
