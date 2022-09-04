import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import { GlobalStyle } from './globalStylr'

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
    <Routes>
    <Route exact path='/' element={<Home />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
