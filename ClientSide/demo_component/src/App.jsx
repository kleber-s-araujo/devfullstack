import './App.css'
import { AloMundoColorido } from './components/AloMundoColorido';
import { AloMundo } from './components/helloWorld';

function App() {

  return (
    <>
      <AloMundo />
      <AloMundoColorido nome={'Kleber'} cor={'blue'} />
      <AloMundoColorido nome={'Silva'} cor={'gray'} />
      <AloMundoColorido nome={'Araujo'} cor={'green'} />
    </>
  )
}

export default App;