import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../App.css";
import { useAuth } from "./AuthContext";

const NavBar = () => {
  const { user, logout, userName } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            id="logo"
            alt="logo da confeitaria"
            style={{ height: "70px" }}
          />
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/produtos">
                Produtos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre">
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tati">
                Quem é a Tati
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contatos">
                Contato
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <CartWidget />
            {user ? (
              <div className="ms-3 d-flex align-items-center">
                <span className="me-3">Olá, {userName}</span>
                <button onClick={logout} className="btn btn-outline-danger">
                  Logout
                </button>
              </div>
            ) : (
              <div className="d-flex">
                <Link className="btn btn-outline-primary ms-3" to="/login">
                  Login
                </Link>
                <Link className="btn btn-primary ms-2" to="/register">
                  Registrar
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
