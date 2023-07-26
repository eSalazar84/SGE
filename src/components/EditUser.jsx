import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UsrCntx } from "../context/UserContext";
import { updateUserById, base_url_users } from "../services/registerService";

function EditUser({ userData }) {
    const { fetchData, handleLogOut, error } = useContext(UsrCntx);

    const [updateUser, setUpdateUser] = useState(userData)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUserById(base_url_users, updateUser.id, updateUser);
        fetchData();
        navigate("/Home.jsx");
    }

    const handleInputChange = (e) => {
        setUpdateUser(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    useEffect(()=>{
       fetchData();
    },[])

    if (error) throw error;

    return (
        <div>
            <h3>Edita tus datos personales acá.</h3>
            <form action="" onSubmit={handleSubmit} >
                <label htmlFor="name">Nombre
                    <input type="text"
                        id="name"
                        name="name"
                        required
                        value={updateUser.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="lastName">Apellido
                    <input type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={updateUser.lastName}
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="avatar">Avatar
                    <input type="text"
                        id="avatar"
                        name="avatar"
                        required
                        value={updateUser.avatar}
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="email">e-mail
                    <input type="email"
                        id="email"
                        name="email"
                        required
                        value={updateUser.email}
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="dni">D.N.I.
                    <input type="text"
                        id="dni"
                        name="dni"
                        required
                        value={updateUser.dni}
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="birthDate">Fecha de Nac.
                    <input type="datetime-local"
                        id="birthDate"
                        name="birthDate"
                        required
                        value={updateUser.birthDate}
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="password">Contraseña
                    <input type="password"
                        id="password"
                        name="password"
                        required
                        value={updateUser.password}
                        onChange={handleInputChange}
                    />
                </label>
                <div>
                    <input type="submit" value="Editar" />
                    <input type="button" value="Eliminar Cuenta" onClick={handleLogOut} />
                    <input type="button" value="Volver" onClick={() => navigate("/Home.jsx")} />
                </div>
            </form>

        </div>
    )
}

export default EditUser;