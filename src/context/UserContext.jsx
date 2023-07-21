import { createContext, useState, useEffect, useCallback } from "react";
import { getAllRegisters, base_url_users } from "../services/registerService.js"
import { initialUser } from "../services/initialUser.js"

export const UsrCntx = createContext([initialUser]);

export const UsrContxProvider = ({ children }) => {
    //Estados necesarios para dar entorno a todos los usuarios
    const [personal, setPersonal] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Estado para dar entorno especicfico al user logueado
    const [user, setUser] = useState(null);

    // trae todos los usuarios que manejan la plataforma
    const fetchData = useCallback(async () => {
        try {
            setError(null);
            setIsLoading(true);
            const data = await getAllRegisters(base_url_users);
            setPersonal(data)
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setIsLoading(false)
        }
    }, []);

    // funcion que ingresa al usuario al sistema
    const handleLogIn = (loggedInUser) => {
        setUser(loggedInUser);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
    }

    const handleLogOut = () => {
        setUser(null);
        localStorage.removeItem("user");
        window.location = "/"
    }

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    },[])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <UsrCntx.Provider value={{ personal, error, isLoading, setPersonal, fetchData, user, handleLogIn, handleLogOut }} >
            {children}
        </UsrCntx.Provider>
    )
}

