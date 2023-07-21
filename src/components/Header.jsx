import React, { useContext } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { UsrCntx } from "../context/UserContext";

function Header() {
    const navigate = useNavigate()

    const { user, handleLogOut, error } = useContext(UsrCntx);
    console.log(user);

    if (error) throw error;
    return (
        <nav>
            <div>Bienvenido, {user.name} </div>
            <button>{navigate("/StudentList.jsx")} Listado de Alumnos</button>
            <button>Listado de Docentes</button>
            <button onClick={handleLogOut}>Cerrar Sesion</button>
            <button>Modificar Datos</button>
        </nav>
    )
}

export default Header;