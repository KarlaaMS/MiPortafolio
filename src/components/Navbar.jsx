import LogoPortafolio from '../assets/LogoPortafolio.svg'
import '../index.css'

function Navbar(){
    return (
    <nav>
        <span><img src={LogoPortafolio} class="LogoPortafolio" alt="Portafolio"></img></span>
    <ul>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#educacion">Educación</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
    </ul>
    </nav>    
    )
}

export default Navbar