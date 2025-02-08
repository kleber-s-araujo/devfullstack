import { useState } from 'react';

export function Contador() {

    const [contagem, setContagem] = useState(0);

    const handlClick = () => {
        setContagem(contagem + 1);
    };

    return (
        <>
            <button onClick={handlClick}>Clique Aqui</button>
            <span>Clicou {contagem} vezes</span>
        </>
    );
}