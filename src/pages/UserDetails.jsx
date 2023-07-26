import Header from "../components/Header";
import EditUser from "../components/EditUser";
import { useContext } from "react";
import { UsrCntx } from "../context/UserContext";
import Footer from "../components/Footer";

function UserDetails() {

    const {user} = useContext(UsrCntx)

    return (
        <>
            <Header title={"Detalles del Usuario"} />
            <EditUser userData={user} />
            <Footer/>
        </>
    )
}

export default UserDetails;