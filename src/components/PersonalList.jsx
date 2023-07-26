import "./personalList.css"
import { useEffect, useState } from "react";
import { getAllRegisters } from "../services/registerService";


export function PersonalList({ url }) {

    const [data, setData] = useState([])

    const fetchData = async (url) => {
        try {
            const allusr = await getAllRegisters(url);
            console.log(allusr);
            setData(allusr)
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

    useEffect(() => {
        fetchData(url);
    }, [])

    return (
        <>
            {data.map((prsnl, i) => (
                <article key={i}>
                    <ol>
                        <li>{prsnl.name} {prsnl.lastName}</li>
                        <img src={prsnl.avatar}></img>
                        <div>
                            <button>Realizar Accion</button>
                        </div>
                    </ol>
                </article>
            ))}
        </>
    )
}