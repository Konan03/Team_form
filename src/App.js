
import { useState } from 'react';
import './App.css';
import Header from "./components/headerComponent/Header";
import Form from './components/FormComponent/Form';
import MyOrg from './components/MyOrg/MyOrg';
import Team from './components/TeamComponent/Team';
import Footer from './components/FooterComponent/Footer';

function App() {
const [mostrarFrom, actualizarMostrar] = useState(false)
const [colaboradores, actualizarColaboradores] = useState([])

//condicion && semuestra

const cambiarMostrar = () =>{
  actualizarMostrar(!mostrarFrom)
}

const registrarColaborador = (colaborador) =>{
  console.log(colaborador)
  //spread operator
  actualizarColaboradores([...colaboradores, colaborador])
}

//lista de equipos
const teams = [
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
  ]

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
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}/>)
      }

      <Footer/>
    </div>
  );
}

export default App;
