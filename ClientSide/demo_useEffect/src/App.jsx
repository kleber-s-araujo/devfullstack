import { useState } from 'react'
import './App.css'
import { Relogio } from './components/Relogio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Relogio />
    </>
  )
}

export default App
