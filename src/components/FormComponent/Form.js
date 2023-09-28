import { useState } from "react";
import "./Form.css";
import Area from "../AreaComponent/Area";
import ListOptions from "../ListOptionsComponent/ListOptions";
import Button from "../ButtonComponent/Button";

const Form = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const{registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) =>{
        e.preventDefault()
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="form">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Area 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required valor={nombre} 
                actualizarValor={setNombre}
            />
            <Area 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required valor={puesto} 
                actualizarValor={setPuesto}
            />
            <Area 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required valor={foto} 
                actualizarValor={setFoto}
            />
            <ListOptions
                valor={equipo}
                actualizarEquipo={setEquipo}
                teams={props.teams}
            />
            <Button>Crear</Button>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Area 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Area 
                titulo="Color" 
                placeholder="Ingresar el color en hex" 
                required valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Button>Registrar equipo</Button>
        </form>
    </section>
}

export default Form;