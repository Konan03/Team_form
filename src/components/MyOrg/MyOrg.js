import { useState } from "react"
import "./MyOrg.css"

const MyOrg = (props) =>{
    //Estado - hooks
    //useState
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    //const [nombre, actualizarNombre] = useState()

    //const [mostrar, actualizarMostar] = useState(true)

    //const manejarClick = () => {
    //    console.log("Monstrar/ocultar", !mostrar)
     //   actualizarMostar(!mostrar)
   // }


    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MyOrg