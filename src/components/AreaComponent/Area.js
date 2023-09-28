import { useState } from "react"
import "./Area.css"

const Area = (props) =>{
    const placeholderModified = `${props.placeholder}...`

    //destructuracion
    const {type = "text"} = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModified}  
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}   
            type={type} 
        />
    </div>
}

export default Area;