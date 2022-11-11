import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link,useParams } from 'react-router-dom';

export default function Home() {

    const [personas, setPersonas]=useState([]);
    const {id}=useParams()

    useEffect(()=> {
        loadPersonas();
    },[])

    const loadPersonas=async()=>{
        const result=await axios.get("http://localhost:8080/personas")
        setPersonas(result.data);
    }

    const deletePersona=async(id)=> {
      await axios.delete(`http://localhost:8080/persona/${id}`)
      loadPersonas()
    }

  return (
    <div className='container'>
        <div className='py-4'>           
            <table class="table border shadow">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Identificacion</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Email</th>
      <th scope="col">Accion</th>
      
    </tr>
  </thead>
  <tbody>

    {
        personas.map((persona, index)=>(
            <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{persona.identificacion}</td>
                <td>{persona.nombre}</td>
                <td>{persona.apellido}</td>
                <td>{persona.email}</td>
                <td>
                <Link 
                className="btn btn-primary mx-2"
                to={`/viewpersona/${persona.id}`}>
                  View
                </Link>
                    <Link 
                      className="btn btn-outline-primary mx-2"
                      to={`/editpersona/${persona.id}`}>
                      Edit
                  </Link>
                    <button className='btn btn-danger mx-2'
                      onClick={()=>deletePersona(persona.id)}>
                      Eliminar
                    </button>
                </td>
             </tr>
        ))
    }
    
    
  </tbody>
</table>

        </div>

    </div>
  )
}
