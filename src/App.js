
import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from "./components/headerComponent/Header";
import Form from './components/FormComponent/Form';
import MyOrg from './components/MyOrg/MyOrg';
import Team from './components/TeamComponent/Team';
import Footer from './components/FooterComponent/Footer';

function App() {
  const [mostrarFrom, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    equipo: "Innovacion y Gestion",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }
  ])
  const [teams, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    }, 
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
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

  const eliminarColaborador = (id) =>{
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //actualizar colo de equipo
  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ", color, id)
    const equiposActualizados = teams.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...teams, {...nuevoEquipo, id: uuid()}])
  }


  return (
    <div >
      <Header/>
      {/*mostrarFrom ? <Form/> : <></>*/}
      {mostrarFrom && <Form 
         teams={teams.map((team) => team.titulo)}
         registrarColaborador={registrarColaborador} 
         crearEquipo={crearEquipo}
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
