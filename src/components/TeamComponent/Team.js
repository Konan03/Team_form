import "./Team.css"
import Colaborator from "../ColabComponent/Colaborator"
import hexToRgba from "hex-to-rgba"

const Team = (props) => {
//destructuracion
const {id, titulo, colorPrimario, colorSecundario} = props.datos
const {colaboradores, eliminarColaborador, actualizarColor, like} = props
const obj ={backgroundColor: hexToRgba(colorPrimario, 0.6)}
const estiloTitulo ={borderColor: colorPrimario}

    return <>
        {
            colaboradores.length > 0 &&
            <section className="team" style={obj}>
            <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(evento) =>{
                    actualizarColor(evento.target.value, id)
                } }
            
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colab">
                {
                    colaboradores.map((colaborador, index) => <Colaborator 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    />)
                }
            </div>
            </section>
        } 
    </>
}

export default Team