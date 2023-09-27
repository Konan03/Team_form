import "./Team.css"
import Colaborator from "../ColabComponent/Colaborator"

const Team = (props) => {
//destructuracion
const {titulo, colorPrimario, colorSecundario} = props.datos
const {colaboradores} = props

    return <section className="team" style={{backgroundColor: colorSecundario}}>
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colab">
            {
                colaboradores.map((colaborador, index) => <Colaborator datos={colaborador} key={index}/>)
            }
        </div>
    </section>
}

export default Team