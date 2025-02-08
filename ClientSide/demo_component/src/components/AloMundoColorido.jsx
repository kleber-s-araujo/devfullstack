export function AloMundoColorido({nome,cor}) {
    const corTexto = cor || 'black';
    return (
        <div>
            <h1 style={{color:corTexto}}>Olá, Mundo!</h1>
        </div>
    );
}