import "./Login.css";
import logo from "../assets/logo-SGE.png"
import Footer from "../components/Footer";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsrCntx } from "../context/UserContext";
import { initialUser } from "../services/initialUser";

function Login() {

    const { handleLogIn, personal } = useContext(UsrCntx);

    const [logIn, setLogIn] = useState(initialUser);

    const [message, setMessage] = useState("");

    function handleChange(e) {
        setLogIn((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const logUsr = personal.find(usr => usr.email === logIn.email && usr.password === logIn.password);

        if (logUsr) {
            setMessage(`Bienvenido ${logUsr.name}!!!`)
            handleLogIn(logUsr);
            navigate("/Home.jsx");
        } else {
            setMessage("mmmm le pifiaste mano")
        }
    }

    return (
        <>
            <main className="login">
                <div className="img-logo">
                    <img src={logo} alt="sge-logo" />
                </div>
                <form action="" className="login-form-container" onSubmit={handleSubmit}>
                    <label htmlFor="email">e-mail
                        <input type="email" name="email" id="email" className="login-form-input" onChange={handleChange} /></label>
                    <label htmlFor="password">password
                        <input type="password" name="password" id="password" className="login-form-input" onChange={handleChange} /></label>
                    <input type="submit" value="Ingresar" className="login-form-btn" />
                </form>
                {message}
            </main>
            <Footer />

        </>
    )

}

export default Login;
