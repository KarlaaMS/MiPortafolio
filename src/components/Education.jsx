function Education(){
    
    const estudios = [
        {
            id: 1, 
            año: "2020-2021",
            titulo: "Tecnica en Programación de Software",
            institucion: "Servicio Nacional de Aprendizaje - SENA"
        }, 
        {
            id: 2,
            año: "2019-2024", 
            titulo: "Tecnologa en Informatica",
            institucion: "Corporación Universitaria Minuto de Dios - UNIMINUTO"
        }, 
        {
            id: 3,
            año: "2024-Actualidad",
            titulo: "Ingeniera en Sistemas",
            institucion: "Corporación Universitaria Minuto de Dios - UNIMINUTO"
        }
    ]

    const certificaciones = [
        {
            id: 1,
            año: "2023",
            titulo: "Front End Developer Certified Associate", 
            institucion: "ITCertificate", 
            verificacion: "https:/itcertificate.us/campus/mod/customcert/verify_certificate.php?contextid=10569&code=wCuH8prARF&qrcode=1", 
            codigo: "wCuH8prARF"
        }
    ]
    return(
        <section id="educacion">
            <p>02 — Educación</p>
            <h2>Formación académica</h2>

            <ul>
                {estudios.map((estudio) => (
                    <li key={estudio.id}>
                    <span>{estudio.año}</span>
                    <div>
                    <p>{estudio.titulo}</p>
                    <p>{estudio.institucion}</p>
                    </div>
                    </li>
                ))}
            </ul>


            <h2 id="certificaciones">Certificaciones</h2>
            <ul>
                {certificaciones.map((certificacion) => (
                    <li key={certificacion.id}>
                        <span>{certificacion.año}</span>
                        <div>
                        <p>{certificacion.titulo}</p>
                        <p>{certificacion.institucion}</p>
                        <a href={certificacion.verificacion} target="_blank" rel="noopener noreferrer">
                            Verificar certificación
                        </a>
                        <p>Código de verificación: {certificacion.codigo}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Education