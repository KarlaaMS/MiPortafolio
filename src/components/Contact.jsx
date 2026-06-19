import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
function Contact() {
  return (
    <section id="contacto">
      <p>05 — Contacto</p>

      <div>
        <div>
          <h2>Contactame</h2>
          <p>Estoy abierta a oportunidades de práctica y trabajo.</p>
          <p>También puedes encontrarme en redes profesionales donde comparto lo que voy aprendiendo.</p>
        </div>

        <div>
          <a href="mailto:karlamsalgados@gmail.com">
            <div className="icon-container"><FaEnvelope size={20}/></div>
            <p>karlamsalgados@gmail.com</p>
          </a>
          <a href="https://linkedin.com/in/karlamss" target="_blank">
            <div className="icon-container"><FaLinkedin size={20}/></div>
            <p>linkedin.com/in/karlamss</p>
          </a>
          <a href="https://github.com/KarlaaMS" target="_blank">
            <div className="icon-container"><FaGithub size={20}/></div>
            <p>github.com/KarlaaMS</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact