import React, { useEffect ,useState} from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from "axios";

export default function ViewPersona() {

    const [persona,setPersona]=useState({
        identificacion:"",
        nombre:"",
        apellido:"",
        email:""
    })

    const  {id}=useParams();

    useEffect(()=>{
        loadPersona()
    },[])

    const loadPersona =async()=>{
        const result=await axios.get(`http://localhost:8080/persona/${id}`,persona)
        setPersona(result.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'> Persona Detalles </h2> 
                <div className='card'>
                    <div className='card-header'>
                        Detalles persona con id : {persona.id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item '>
                                <b>Identificacion: </b>
                                {persona.identificacion}
                            </li>
                            <li className='list-group-item '>
                                <b>Nombre: </b>
                                {persona.nombre}
                            </li>
                            <li className='list-group-item '>
                                <b>Apellido: </b>
                                {persona.apellido}
                            </li>
                            <li className='list-group-item '>
                                <b>E mail: </b>
                                {persona.email}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className='btn btn-primary my-2' to={"/"}>
                    Back to Home
                </Link>
            </div>
        </div>
    </div>
  ) 
}
