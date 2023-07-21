import "./personalList.css"
import { useContext } from "react";
import { UsrCntx } from "../context/UserContext.jsx"

export function PersonalList() {
    const { personal, error, isLoading } = useContext(UsrCntx);
    console.log(personal);
    if (isLoading) return (<div><h2>Please, wait...</h2></div>);
    if (error) return (<div>{error}</div>)
    return (
        <>
            <h2 className="color-title">Listado de usuarios</h2>
            <article>
                {personal.map((prsnl, i) => (
                    <ul key={i}>
                        <li>{prsnl.name} {prsnl.lastName}</li>
                        <img src={prsnl.avatar}></img>
                    </ul>
                ))}
            </article>
        </>
    )
}