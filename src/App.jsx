import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Fap from './Pages/Faq'
import Nosotros from './Pages/Nosotros'
import Inicio from './Pages/Inicio'
import Modulo from './Pages/Modulo'
import Gastroenterogia from './Pages/Gastroenterogia'
import PoliticasCodiciones from './Pages/PoliticasCodiciones'
import AplicacionesWebMetodoVargas from './Pages/AplicacionesWebMetodoVargas'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Modulo' element={<Modulo />} />
        <Route path='/Faq' element={<Fap />} />
        <Route path='/Gastroenterologia' element={<Gastroenterogia />} />
        <Route path='/PoliticasCodiciones' element={<PoliticasCodiciones />} />
        <Route path='/AplicacionesWebMetodoVargas' element={<AplicacionesWebMetodoVargas/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
