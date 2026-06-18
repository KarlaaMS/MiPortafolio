import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

import {Routes, Route} from 'react-router-dom'
import CalculadoraIMC from "./components/projects/calculadoraIMC"
import ListaTareas from "./components/projects/listaTareas"
import GeneradorPaletas from "./components/projects/generadorPaletas"
import JuegoAdivinanza from "./components/projects/juegoAdivinanza"
import DashboardClima from "./components/projects/dashboardClima"
import BuscadorPeliculas from "./components/projects/buscadorPeliculas"
import PortafolioTema from "./components/projects/portafolioTema"
import EcommerceSimple from "./components/projects/ecommerceSimple"
import RedSocialBasica from "./components/projects/redSocialBasica"
import AplicacionTareas from "./components/projects/aplicacionTareas"
import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>  
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </>
      } />
        <Route path="/calculadoraIMC" element={<CalculadoraIMC />} />
        <Route path="/listaTareas" element={<ListaTareas />} />
        <Route path="/generadorPaletas" element={<GeneradorPaletas />} />
        <Route path="/juegoAdivinanza" element={<JuegoAdivinanza />} />
        <Route path="/dashboardClima" element={<DashboardClima />} />
        <Route path="/buscadorPeliculas" element={<BuscadorPeliculas />} />
        <Route path="/portafolioTema" element={<PortafolioTema />} />
        <Route path="/ecommerceSimple" element={<EcommerceSimple />} />
        <Route path="/redSocialBasica" element={<RedSocialBasica />} />
        <Route path="/aplicacionTareas" element={<AplicacionTareas />} />       
      </Routes>
    </div>
  )
}

export default App