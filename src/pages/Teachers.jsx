import React from "react";
import "./Teachers.css";
import Header from "../components/Header.jsx"
import { PersonalList } from "../components/PersonalList.jsx";
import { base_url_teachers } from "../services/registerService.js";
import Footer from "../components/Footer";

function Teachers() {
    return (
        <>
            <Header title={"Listado de Docentes"} />
            <PersonalList url={base_url_teachers} />
            <Footer/>
        </>
    )
}

export default Teachers;
