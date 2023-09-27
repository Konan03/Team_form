import "./Team.css"
import Colaborator from "../ColabComponent/Colaborator"

const Team = (props) => {
//destructuracion
const {titulo, colorPrimario, colorSecundario} = props.datos

    return <section className="team" style={{backgroundColor: colorSecundario}}>
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colab">
            <Colaborator/>
            <Colaborator/>
            <Colaborator/>
            <Colaborator/>
            <Colaborator/>
            <Colaborator/>
        </div>
    </section>
}

export default Team