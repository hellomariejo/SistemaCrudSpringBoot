
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddPersona() {

    let navigate=useNavigate()

    const [persona, setPersona]=useState({
        identificacion:"",
        nombre:"",
        apellido:"",
        email:""
    })

    const{identificacion,nombre,apellido,email}=persona

    const onInputChange=(e)=>{
        setPersona({...persona,[e.target.name]:e.target.value})

    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/persona",persona)
        navigate("/")

    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>
                    Registrar Persona
                </h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                
                <div className='mb-3'>
                    <label htmlFor='identificacion' className='form-label'>Identificacion</label>
                    <input 
                        type={"text"} 
                        className="form-control" 
                        placeholder='Ingrese identificacion' 
                        name="identificacion" 
                        value={identificacion} 
                        onChange={(e)=>onInputChange(e)}>
                        
                    </input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='nombre' className='form-label'>Nombre</label>
                    <input 
                        type={"text"} 
                        className="form-control" 
                        placeholder='Ingrese nombre' 
                        name="nombre" 
                        value={nombre} 
                        onChange={(e)=>onInputChange(e)} >
                    </input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='apellido' className='form-label'>Apellido</label>
                    <input 
                        type={"text"} 
                        className="form-control" 
                        placeholder='Ingrese apellido' 
                        name="apellido" 
                        value={apellido} 
                        onChange={(e)=>onInputChange(e)}>
                    </input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input 
                        type={"text"} 
                        className="form-control" 
                        placeholder='Ingrese email' 
                        name="email" 
                        value={email} 
                        onChange={(e)=>onInputChange(e)}>
                    </input>
                </div>
                
                <button type='submit' className='btn btn-outline-primary'> Submit</button>
                <Link className='btn btn-outline-danger mx-2' to="/"> Cancelar</Link>
                </form>
            </div>
            

        </div>
    </div>
  )
}
