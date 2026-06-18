function Skills() {
  const habilidades = [
    {
      id: 1,
      categoria: "Lenguajes de programación",
      tecnologias: ["Python", " JavaScript", " Postman", " HTML", " CSS"]
    },
    {
      id: 2,
      categoria: "Bases de datos",
      tecnologias: ["MySQL", " PostgreSQL", " SQL Server", " Oracle PL/SQL"]
    },
    {
      id: 3,
      categoria: "Frameworks & herramientas",
      tecnologias: ["GitHub", " VS Code", " Bootstrap", " React", " PowerBI", " Looker Studio", " Trello", " Dashboard", " WordPress", " Elementor"]
    },
    {
      id: 4,
      categoria: "Sistemas & redes",
      tecnologias: ["Windows"," Linux", " Redes TCP/IP"]
    },
    {
      id: 5,
      categoria: "Habilidades blandas",
      tecnologias: ["Trabajo en equipo", " Aprendizaje continuo", " Comunicación acertiva", " Resolución de problemas", " Adaptabilidad", " Pensamiento crítico"]
    },
    {
      id: 6,
      categoria: "Metodologías",
      tecnologias: ["Scrum"]
    }
  ]

  return (
    <section id="habilidades">
      <p>03 — Habilidades técnicas y blandas</p>
      <h2>Tecnologías y herramientas</h2>

      <div>
        {habilidades.map((grupo) => (
          <div key={grupo.id}>
            <p>{grupo.categoria}</p>
            <div>
              {grupo.tecnologias.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills