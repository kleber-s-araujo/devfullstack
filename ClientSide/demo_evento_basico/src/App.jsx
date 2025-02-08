import './App.css'
import { Botao1 } from './components/botao1';
import { Botao2 } from './components/Botao2';

function App() {

  const handlClick = (event) => {
    alert(`Clicou em ${event.currentTarget.id}`);
  };

  return (
    <div id='divApp' onClick={handlClick}>
      <Botao1 />
      <Botao2 />
    </div>
  )
}

export default App
