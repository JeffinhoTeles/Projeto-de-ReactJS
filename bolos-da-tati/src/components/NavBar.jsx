import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/logo.png'; 
import CartWidget from './CartWidget'; 
import '../App.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo da empresa como Link para Home */}
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            id="logo"
            alt="logo da confeitaria"
            style={{ height: '70px' }} // Ajuste do tamanho do logo
          />
        </Link>
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
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/produtos">Produtos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre">Sobre</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tati">Quem é a Tati</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contatos">Contato</Link>
            </li>
          </ul>
          {/* CartWidget colocado na Navbar */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
 