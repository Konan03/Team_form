import { useState } from "react";
import "./Form.css";
import TextArea from "../TextAreaComponent/TextArea";
import ListOptions from "../ListOptionsComponent/ListOptions";
import Button from "../ButtonComponent/Button";

const Form = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const manejarEnvio = (e) =>{
        e.preventDefault()
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }

        console.log(datosAEnviar)
    }

    return <section className="form">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <TextArea 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required valor={nombre} 
                actualizarValor={setNombre}
            />
            <TextArea 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required valor={puesto} 
                actualizarValor={setPuesto}
            />
            <TextArea 
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
    </section>
}

export default Form;