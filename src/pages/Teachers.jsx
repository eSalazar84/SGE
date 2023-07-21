import React from "react";
import "./Teachers.css";
import Header from "../components/Header.jsx"
import { PersonalList } from "../components/PersonalList.jsx";
import { base_url_teachers } from "../services/registerService.js";

function Teachers() {
    return (
        <>
            <Header />
            <h3 className="color-title">Listado de Docentes</h3>
            <PersonalList url={base_url_teachers} />
        </>
    )
}

export default Teachers;
