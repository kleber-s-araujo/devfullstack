import { useEffect, useState } from "react";

export function Relogio () {
    const [horario, setHorario] = useState(new Date());
    useEffect(() => {
        function tick () {
            setHorario(new Date);
        }
        const temporizador = setInterval(() => tick(), 1000);
        return () => clearInterval(temporizador);
    }, []);
    return (
        <>
            <h2>Relógio:</h2>
            <h1>{horario.toLocaleTimeString()}</h1>
        </>
    )
}