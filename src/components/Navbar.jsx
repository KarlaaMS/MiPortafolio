import { useState } from 'react'
import LogoPortafolio from '../assets/LogoPortafolio.svg'
import { Link } from 'react-router-dom'
import '../index.css'

function Navbar() {
  const [abierto, setAbierto] = useState(false)

  return (
    <nav>
    <span><img src={LogoPortafolio} class="LogoPortafolio" alt="Portafolio"></img></span>
      {/* Links escritorio */}
      <ul className="nav-links">
        <li><a href="/#sobre-mi" onClick={() => setAbierto(false)}>Sobre mí</a></li>
        <li><a href="/#educacion" onClick={() => setAbierto(false)}>Educación</a></li>
        <li><a href="/#habilidades" onClick={() => setAbierto(false)}>Habilidades</a></li>
        <li><a href="/#proyectos" onClick={() => setAbierto(false)}>Proyectos</a></li>
        <li><a href="/#contacto" onClick={() => setAbierto(false)}>Contacto</a></li>
      </ul>

      {/* Botón hamburguesa */}
      <button
        className="hamburguesa"
        onClick={() => setAbierto(!abierto)}
      >
        {abierto ? '✕' : '☰'}
      </button>

      {/* Menú móvil */}
      {abierto && (
        <ul className="nav-mobile">
          <li><a href="/#sobre-mi" onClick={() => setAbierto(false)}>Sobre mí</a></li>
          <li><a href="/#educacion" onClick={() => setAbierto(false)}>Educación</a></li>
          <li><a href="/#habilidades" onClick={() => setAbierto(false)}>Habilidades</a></li>
          <li><a href="/#proyectos" onClick={() => setAbierto(false)}>Proyectos</a></li>
          <li><a href="/#contacto" onClick={() => setAbierto(false)}>Contacto</a></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar