import React, { useContext } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { UsrCntx } from "../context/UserContext";

function Header() {
    const navigate = useNavigate()

    function handleClickStudents(){
        navigate("/Students.jsx");
    }

    function handleClickTeachers(){
        navigate("/Teachers.jsx");
    }

    function handleModifData() {
        
        
    }

    const { user, handleLogOut, error } = useContext(UsrCntx);

    if (error) throw error;
    return (
        <nav>
            <div>Bienvenido, {user.name} </div>
            <button onClick={handleClickStudents}>Listado de Alumnos</button>
            <button onClick={handleClickTeachers}>Listado de Docentes</button>
            <button onClick={handleLogOut}>Cerrar Sesion</button>
            <button onClick={handleModifData}>Modificar Datos</button>
        </nav>
    )
}

export default Header;