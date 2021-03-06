import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar new-nav navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <NavLink className="navbar-brand" to="/"  exact={true}>Shiva Sabokdast</NavLink>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="./contact" activeClassName="activeStyle">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="./portfolio" activeClassName="activeStyle">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/"   exact={true} activeClassName="activeStyle" >About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;