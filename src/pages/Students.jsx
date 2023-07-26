import React from "react";
import "./Students.css";
import Header from "../components/Header.jsx"
import { PersonalList } from "../components/PersonalList.jsx";
import { base_url_students } from "../services/registerService.js";
import Footer from "../components/Footer";

function Students() {
    return (
        <>
            <Header title={"Listado de Alumnos"} />
            <PersonalList url={base_url_students} />
            <Footer/>
        </>
    )
}

export default Students;

