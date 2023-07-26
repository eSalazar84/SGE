import React, { useContext } from "react";
import "./Home.css"
import Header from "../components/Header";
import { UsrCntx } from "../context/UserContext";
import Footer from "../components/Footer";

function Home() {

    const { user } = useContext(UsrCntx);
    return (

        <>
            <Header title={"Sistema de Gestión de Legajos Escolar"} />
            <main>
                Bienvenido al sistema, aca le vamos a mostrar todo lo que puede hacer
                <button>Agregar Alumno</button>
                <button>Agregar Docente</button>
            </main>
            <Footer/>
        </>
    )
}

export default Home;