import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const state = useSelector((state)=> state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fs-4 fw-bold" to="/">
            Online Store
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link fs-4" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item fs-4">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item fs-4">
                <a className="nav-link" href="#">
                  Offers
                </a>
              </li>          
            </ul>
          </div>
          <div className="buttons">
                <Link to="/cart" className="btn btn-outline-dark ms-2">
                   <i className="fa fa-shopping-cart me-1"></i> Cart({state.length})</Link>
            </div>
         
        </div>
      </nav>
    </div>
  );
}
