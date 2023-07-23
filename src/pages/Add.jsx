import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
useNavigate

const Add = () => {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({nombre: '', edad: '', genero: '', titulo: '', especialidad: '', experiencia: '', materias: '', telefono: '', correo: ''});
  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3030/profesores', inputs)
    .then((res) => {
      console.log(res);
      alert('Se agregaron correctamente los datos');
      navigate('/dashboard');
    })
    .catch((err) => {
      console.log(err);
      alert('No se agregaron correctamente los datos');
    })
    //llevar a la otra pagina
  };
  return (
    <div>
      {/* a form with data of teachers */}
      <h1>Formulario de profesores</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" value={inputs.nombre} onChange={e=>setInputs({...inputs, nombre: e.target.value})} />
        <label htmlFor="number">Edad</label>
        <input type="text" id="edad" name="edad" value={inputs.edad} onChange={e=>setInputs({...inputs, edad: e.target.value})} />
        <label htmlFor="genero">Género</label>
        <input type="text" id="genero" name="genero" value={inputs.genero} onChange={e=>setInputs({...inputs, genero: e.target.value})} />
        <label htmlFor="titulo">Título</label>
        <input type="text" id="titulo" name="titulo" value={inputs.titulo} onChange={e=>setInputs({...inputs, titulo: e.target.value})} />
        <label htmlFor="especialidad">Especialidad</label>
        <input type="text" id="especialidad" name="especialidad" value={inputs.especialidad} onChange={e=>setInputs({...inputs, especialidad: e.target.value})} />
        <label htmlFor="experiencia">Experiencia</label>
        <input type="text" id="experiencia" name="experiencia" value={inputs.experiencia} onChange={e=>setInputs({...inputs, experiencia: e.target.value})} />
        <label htmlFor="materias">Materias</label>
        <input type="number" id="materias" name="materias" value={inputs.materias} onChange={e=>setInputs({...inputs, materias: e.target.value})} />
        <label htmlFor="telefono">Teléfono</label>
        <input type="text" id="telefono" name="telefono" value={inputs.telefono} onChange={e=>setInputs({...inputs, telefono: e.target.value})} />
        <label htmlFor="correo">Correo</label>
        <input type="email" id="correo" name="correo" value={inputs.correo} onChange={e=>setInputs({...inputs, correo: e.target.value})} />

        <button type="submit" className="contrast" onClick={handleLogin}>Acceder</button>
      </form>

    </div>
  )
}

export default Add