import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import { Button, GlobalStyle } from './globalStylr'
import { useState } from 'react'

function App() {
  const [darck, setDarck] = useState(false)

  return (
    <BrowserRouter>
      <GlobalStyle darck={ darck } />
    <Routes>
    <Route exact path='/' element={<Home darck={ darck } />} />

    </Routes>
    <Button
    onClick={() => setDarck((prev) => !prev)}
    darck={ darck }
    >
      {darck ? 'Claro' : 'Escuro'}
    </Button>
    </BrowserRouter>
  )
}

export default App
