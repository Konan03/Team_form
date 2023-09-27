import "./ListOptions.css"

const ListOptions = (props) =>{

   
    const manejarCambio = (e) =>{
        props.actualizarEquipo(e.target.value)
    }

    return <div className="list-options">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
           <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.teams.map((team, index) => <option key={index} value={team}>{team}</option>)}
        </select>
    </div>
}

export default ListOptions;