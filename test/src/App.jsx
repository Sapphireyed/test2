import { useState } from 'react'
import { Home } from './home/home.jsx';
import './css.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App