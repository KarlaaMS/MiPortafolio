import calculadoraIMC from "./projects/calculadoraIMC"
import listaTareas from "./projects/listaTareas"
import generadorPaletas from "./projects/generadorPaletas"
import juegoAdivinanza from "./projects/juegoAdivinanza"
import dashboardClima from "./projects/dashboardClima"
import buscadorPeliculas from "./projects/buscadorPeliculas"
import portafolioTema from "./projects/portafolioTema"
import ecommerceSimple from "./projects/ecommerceSimple"
import redSocialBasica from "./projects/redSocialBasica"
import aplicacionTareas from "./projects/aplicacionTareas"
import { Link } from 'react-router-dom'
function Projects() {

  const proyectosBasicos = [
    {
        id: 1,
        nivel: "Básico",
        estado: "Finalizado",
        nombre: "Calculadora IMC",
        descripcion: "Formulario con inputs, cálculo en tiempo real y resultado con categoría",
        tecnologias: ["React", "CSS", "Manejo de formularios", "Lógica condicional"],
        enlace: "calculadoraIMC"
    }, 
    {
        id: 2,
        nivel: "Básico",
        estado: "En construcción",
        nombre: "Lista de tareas",
        descripcion: "Aplicación para agregar, marcar como completada y eliminar tareas",
        tecnologias: ["React", "CSS", "Manejo de estados", "Eventos"],
        enlace: "listaTareas",
    }, 
    {
        id: 3,
        nivel: "Básico",
        estado: "Sin Iniciar",
        nombre: "Generador de paletas de color", 
        descripcion: "Click en un botón y genera colores aleatorios con su código hexadecimal",
        tecnologias: ["React", "CSS dinámico", "Manejo de eventos", "Aleatoriedad"],
        enlace: "generadorPaletas"
    }]

    const proyectosMedios = [
    {
        id: 1,
        nivel: "Medio",
        estado: "Sin Iniciar",
        nombre: "Juego de adivinanza el número",
        descripcion: "Juego interactivo donde los jugadores adivinan un número secreto en un número limitado de intentos",
        tecnologias: ["React", "CSS", "Manejo de estados", "Lógica del juego"], 
        enlace: "juegoAdivinanza"
    }, 
    {
        id: 2,
        nivel: "Medio",
        estado: "Sin Iniciar",
        nombre: "Dashboard de clima",
        descripcion: "Aplicación que muestra el clima actual, busca una ciudad y muestra temperatura, humedad, condición.",
        tecnologias: ["React", "CSS", "API de clima externa", "Carga de datos asíncronica"], 
        enlace: "dashboardClima"
    }, 
    {
        id: 3,
        nivel: "Medio", 
        estado: "Sin Iniciar", 
        nombre: "Buscador de películas",
        descripcion: "Aplicación que permite a los usuarios buscar películas por título, mostrando resultados con imagen, título y año de lanzamiento",
        tecnologias: ["React", "CSS", "API de películas externa", "Diseño de tarjetas"], 
        enlace: "buscadorPeliculas"
    }, 
    {
        id: 4,
        nivel: "Medio", 
        estado: "Sin Iniciar", 
        nombre: "Portafolio con modo claro / oscuro", 
        descripcion: "Portafolio personal con opción para cambiar entre tema claro y oscuro, mostrando proyectos y habilidades",
        tecnologias: ["React", "CSS dinámico", "Manejo de estados", "Diseño responsivo"], 
        enlace: "portafolioTema"
    }]

    const proyectosAvanzados = [
    {
        id: 1,
        nivel: "Avanzado",
        estado: "Sin Iniciar",
        nombre: "E-commerce simple",
        descripcion: "Tienda en línea con catálogo de productos, carrito de compras y proceso de pago simulado",
        tecnologias: ["React", "CSS", "Manejo de estados complejos", "Simulación de backend"], 
        enlace: "ecommerceSimple"
    }, 
    {
        id: 2,
        nivel: "Avanzado",
        estado: "Sin Iniciar",
        nombre: "Red social básica",
        descripcion: "Plataforma de red social donde los usuarios pueden registrarse, crear perfiles, publicar actualizaciones y seguir a otros usuarios",
        tecnologias: ["React", "CSS", "Manejo de estados complejos", "Simulación de backend", "Autenticación de usuarios"], 
        enlace: "redSocialBasica"
    }, 
    {
        id: 3,
        nivel: "Avanzado",
        estado: "Sin Iniciar",
        nombre: "Aplicación de tareas pendientes",
        descripcion: "Aplicación para gestionar tareas pendientes con categorías, fechas límite y notificaciones",
        tecnologias: ["React", "CSS", "Manejo de estados complejos", "Simulación de backend"], 
        enlace: "aplicacionTareas"
    }
 ]

  return (
    <section id="proyectos">
      <p>04 — Proyectos</p>
      <h2>Lo que viene</h2>
        <div className="intro">
          <p>Proyectos realizados y pendientes por realizar, divididos por nivel de dificultad</p>
        </div>

       <div id="nivelBasico">
        <h2 className="titulo">Proyectos básicos</h2>
        {proyectosBasicos.map((proyecto) => (
          <div key={proyecto.id}>
            <p>{proyecto.nivel} - {proyecto.estado}</p>
            <h3>{proyecto.nombre}</h3>
            <h5>{proyecto.descripcion}</h5>
            <Link to={`/${proyecto.enlace}`} rel="noopener noreferrer">
              <button className="verProyecto">Ver proyecto</button>
            </Link>
          </div>
        ))}
      </div>

      <div id="nivelMedio">
        <h2 className="titulo">Proyectos medios</h2>
        {proyectosMedios.map((proyecto) => (
          <div key={proyecto.id}>
            <p>{proyecto.nivel} - {proyecto.estado}</p>
            <h3>{proyecto.nombre}</h3>
            <h5>{proyecto.descripcion}</h5>
            <Link to={`/${proyecto.enlace}`} target="_blank" rel="noopener noreferrer">
              <button className="verProyecto">Ver proyecto</button>
            </Link>
          </div>
        ))}
      </div>

      <div id="nivelAvanzado">
        <h2 className="titulo">Proyectos avanzados</h2>
        {proyectosAvanzados.map((proyecto) => (
          <div key={proyecto.id}>
            <p>{proyecto.nivel} - {proyecto.estado}</p>
            <h3>{proyecto.nombre}</h3>
            <h5>{proyecto.descripcion}</h5>
            <Link to={`/${proyecto.enlace}`} target="_blank" rel="noopener noreferrer">
              <button className="verProyecto">Ver proyecto</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects