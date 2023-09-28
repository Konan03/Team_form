
import { useState } from 'react';
import './App.css';
import Header from "./components/headerComponent/Header";
import Form from './components/FormComponent/Form';
import MyOrg from './components/MyOrg/MyOrg';
import Team from './components/TeamComponent/Team';
import Footer from './components/FooterComponent/Footer';

function App() {
const [mostrarFrom, actualizarMostrar] = useState(false)
const [colaboradores, actualizarColaboradores] = useState([{
  equipo: "Front End",
  foto: "https://github.com/harlandlohora.png",
  nombre: "Harland Lohora",
  puesto: "Instructor"
},
{
  equipo: "Programacion",
  foto: "https://github.com/genesysaluralatam.png",
  nombre: "Genesys Rondón",
  puesto: "Desarrolladora de software e instructora"
},
{
  equipo: "UX y Diseño",
  foto: "https://github.com/JeanmarieAluraLatam.png",
  nombre: "Jeanmarie Quijada",
  puesto: "Instructora en Alura Latam"
},
{
  equipo: "Programacion",
  foto: "https://github.com/christianpva.png",
  nombre: "Christian Velasco",
  puesto: "Head de Alura e Instructor"
},
{
  equipo: "Innovacion y Gestion",
  foto: "https://github.com/JoseDarioGonzalezCha.png",
  nombre: "Jose Gonzalez",
  puesto: "Dev FullStack"
}
])
const [teams, actualizarEquipos] = useState([
  {
    titulo: "Programacion",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9"
  }, 
  {
    titulo: "Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF"
  },
  {
    titulo: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2"
  },
  {
    titulo: "Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8"
  },
  {
    titulo: "UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5"
  },
  {
    titulo: "Movil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9"
  },
  {
    titulo: "Innovacion y Gestion",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF"
  },
  ])

//condicion && semuestra

const cambiarMostrar = () =>{
  actualizarMostrar(!mostrarFrom)
}

const registrarColaborador = (colaborador) =>{
  console.log(colaborador)
  //spread operator
  actualizarColaboradores([...colaboradores, colaborador])
}

const eliminarColaborador = () =>{
  console.log("eliminarrr")
}

//actualizar colo de equipo
const actualizarColor = (color, titulo) =>{
  console.log("Actualizar: ", color, titulo)
  const equiposActualizados = teams.map((equipo) =>{
    if(equipo.titulo === titulo){
      equipo.colorPrimario = color
    }
    return equipo
  })

  actualizarEquipos(equiposActualizados)
}

//lista de equipos


  return (
    <div >
      <Header/>
      {/*mostrarFrom ? <Form/> : <></>*/}
      {mostrarFrom && <Form 
         teams={teams.map((team) => team.titulo)}
         registrarColaborador={registrarColaborador} 
        />
      }

      <MyOrg cambiarMostrar={cambiarMostrar}/>
      {
        teams.map((equipo) => <Team 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        />)
      }

      <Footer/>
    </div>
  );
}

export default App;
