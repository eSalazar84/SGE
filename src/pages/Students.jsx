import React from "react";
import "./Students.css";
import Header from "../components/Header.jsx"
import { PersonalList } from "../components/PersonalList.jsx";
import { base_url_students } from "../services/registerService.js";

function Students() {
    return (
        <>
            <Header />
            <h3 className="color-title">Listado de Alumnos</h3>
            <PersonalList url={base_url_students} />
        </>
    )
}

export default Students;

