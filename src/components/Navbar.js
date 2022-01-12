import React from "react";
import {NavLink} from "react-router-dom";
export const Navbar = () => (
    <nav className= "navbar navbar-dark navbar-expand-lg">
        <div className= "navbar-brand">
            Co-working App
        </div>
        <ul className="navbar-nav">

            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/"
                    exact
                >
                    Главная
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/about"
                >
                    Форма Регистрации
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/datepicker"
                >
                    Выбор Даты
                </NavLink>
            </li>
        </ul>
    </nav>
)