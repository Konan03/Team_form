import { useState } from "react"
import "./TextArea.css"

const TextArea = (props) =>{
    const placeholderModified = `${props.placeholder}...`

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="text-area">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModified}  
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}    
        />
    </div>
}

export default TextArea;