import '../projects.css'
import { Link } from 'react-router-dom'

function CalculadoraIMC() {
  return (
    <div className="project">
      <h2 id="titulo-calculadora">Calculadora IMC</h2>
      <div className="project-buttons">
      <a href="https://github.com/KarlaaMS/calculadora-imc" target="_blank" rel="noopener noreferrer">
        <button className="boton-imc">Ver proyecto en GitHub</button>
      </a>
      <a href="https://imcalculadora.vercel.app/" target="_blank" rel="noopener noreferrer">
        <button className="boton-imc">Ver proyecto en vivo</button>
      </a>
      </div>
    </div>
  )
}

export default CalculadoraIMC