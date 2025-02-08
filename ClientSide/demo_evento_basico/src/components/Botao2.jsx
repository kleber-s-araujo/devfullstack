export function Botao2({}) {
    
    function handlClick(event) {
        event.stopPropagation();
        alert(`Clicou ${event.currentTarget.id}`)
    }

    return (
        <button id="Botão 2" onClick={handlClick}>Botão 2</button>
    );
}