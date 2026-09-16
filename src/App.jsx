import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PropiedadDetalle from './pages/PropiedadDetalle'

function App() {
  return (
    <BrowserRouter basename="/InversionesSur">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propiedad/:id" element={<PropiedadDetalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
