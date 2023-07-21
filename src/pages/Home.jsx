import React, { useContext } from "react";
import "./Home.css"
import Header from "../components/Header";
import { UsrCntx } from "../context/UserContext";

function Home() {

    const { user } = useContext(UsrCntx);
    return (

        <>
            <Header />
            <main>
                Bienvenido al sistema, aca le vamos a mostrar todo lo que puede hacer
                <button>Agregar Alumno</button>
                <button>Agregar Docente</button>
            </main>
        </>
    )
}

export default Home;