import React, { useContext } from "react";
import "./Home.css"
import Header from "../components/Header";
import { PersonalList } from "../components/personalList";
import { UsrCntx } from "../context/UserContext";

function Home() {

    const { user } = useContext(UsrCntx);
    console.log(user);
    return (

        <>
            <Header />
            <PersonalList />
        </>
    )
}

export default Home;