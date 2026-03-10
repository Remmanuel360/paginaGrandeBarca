import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EntradasBarca from "./componentes/entradas";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <EntradasBarca />
    </div>
  );
}

export default App
