import { useState } from "react";

export function ControlledForm() {
    const [formData, setFormData] = useState({nome:'Luke', jedi:true});
    const handleNomeChange = (event) => {
        setFormData({
            ...formData,
            nome: event.target.value
        });
    };
    const handleJediChange = (event) => {
        setFormData({
            ...formData,
            jedi: event.target.checked
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Nome: ${formData.nome} Jedi: ${formData.jedi}`);
    };
    return (
        <>
            <h1>Controlled Form</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Nome</p>
                        <input type='text' name='nome' value={formData.nome} onChange={handleNomeChange} />
                    </label>
                    <label>
                        <p>Jedi</p>
                        <input type='checkbox' name='jedi' checked={formData.jedi} onChange={handleJediChange} />
                    </label>
                </fieldset>
                <button type='submit'>Enviar</button>
            </form>
        </>
    );
}