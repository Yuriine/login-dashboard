import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link, useParams, useNavigate } from 'react-router-dom'

const Update = () => {

    const {id} = useParams();
    const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:3030/profesores/${id}`)
        .then((res) => {
            setInputs(res.data);
            
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3030/profesores/${id}`, inputs)
        .then((res) => {
            setInputs(res.data);
            alert('Se modificaron correctamente los datos');
            navigate('/dashboard');
        })
        .catch((err) => {
            console.log(err);
        })
    }
  return (  
    <div>
      {/* a form with data of teachers */}
      <h1>Formulario de profesores</h1>
      <form onSubmit={handleUpdate}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" value={inputs.nombre} onChange={e => setInputs({...inputs, nombre: e.target.value})} />
        <label htmlFor="edad">Edad</label>
        <input type="number" id="edad" name="edad" value={inputs.edad} onChange={e => setInputs({...inputs, edad: e.target.value})} />
        <label htmlFor="genero">Género</label>
        <input type="text" id="genero" name="genero" value={inputs.genero} onChange={e => setInputs({...inputs, genero: e.target.value})} />
        <label htmlFor="titulo">Título</label>
        <input type="text" id="titulo" name="titulo" value={inputs.titulo} onChange={e => setInputs({...inputs, titulo: e.target.value})} />
        <label htmlFor="especialidad">Especialidad</label>
        <input type="text" id="especialidad" name="especialidad" value={inputs.especialidad} onChange={e => setInputs({...inputs, especialidad: e.target.value})} />
        <label htmlFor="experiencia">Experiencia</label>
        <input type="text" id="experiencia" name="experiencia" value={inputs.experiencia} onChange={e => setInputs({...inputs, experiencia: e.target.value})} />
        <label htmlFor="materias">Materias</label>
        <input type="text" id="materias" name="materias" value={inputs.materias} onChange={e => setInputs({...inputs, materias: e.target.value})} />
        <label htmlFor="telefono">Teléfono</label>
        <input type="number" id="telefono" name="telefono" value={inputs.telefono} onChange={e => setInputs({...inputs, telefono: e.target.value})}/>
        <label htmlFor="correo">Correo</label>
        <input type="email" id="correo" name="correo" value={inputs.correo} onChange={e => setInputs({...inputs, correo: e.target.value})} />

        <button type="submit" className="contrast" >Actualizar</button>
      </form>

    </div>
  )
}

export default Update;