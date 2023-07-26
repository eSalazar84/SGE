import React, { useContext, useState } from "react";
import "./Header.css";
import { useNavigate, Link } from "react-router-dom";
import { UsrCntx } from "../context/UserContext";

function Header({ title }) {

    const { user, handleLogOut, error } = useContext(UsrCntx);
    const navigate = useNavigate()

    function handleClickStudents() {
        navigate("/Students.jsx");
    }

    function handleClickTeachers() {
        navigate("/Teachers.jsx");
    }

    function handleModifData() {
        navigate("/DetailsUser.jsx");
    }


    if (error) return { error };
    return (
        <>
            <nav className="nvbr">
                <h1><Link to={"/Home.jsx"}>SGE</Link></h1>
                <div>Bienvenido, {user.name} </div>
                <button onClick={handleClickStudents}>Listado de Alumnos</button>
                <button onClick={handleClickTeachers}>Listado de Docentes</button>
                <button onClick={handleLogOut}>Cerrar Sesion</button>
                <button onClick={handleModifData}>Modificar Datos</button>
            </nav>
            <h3 className="color-title">{title}</h3>
        </>

    )
}

export default Header;