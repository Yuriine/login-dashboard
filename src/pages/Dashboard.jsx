import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './../styles/dashboard.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';

import NavBar from '../components/NavBar';

const Dashboard = () => {

    const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);


    const navigateTo = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:3030/profesores')
            .then((res) => {
                setColumns(Object.keys(res.data[0]));
                setRecords(res.data);
            }
            )

    }, [])
    const handleDelete = (id) => {
        const conf = window.confirm('¿Está seguro de eliminar este registro?');
        if (conf) {
            axios.delete(`http://localhost:3030/profesores/${id}`)
                .then((res) => {
                    alert('Se eliminó correctamente el registro');
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
    
    const handleAdd =  (event) => {
        event.preventDefault();
        try {

                // axios.post('http://localhost:3030/profesores', { username, password });
                // console.log('¡Inició sesión correctamente!');
                //llevar a la otra pagina
                navigateTo('/create',
                    {
                        state: {
                            logged: true,

                        }
                    }
                );

                // // Antes de navegar a la página "/dashboard"
                // localStorage.setItem('userData', JSON.stringify({ username: username, logged: true }));

                // // Navegar a la página "/dashboard"
                // navigate('/dashboard');

                // // En el componente "Dashboard" o en cualquier otra página
                // const userData = JSON.parse(localStorage.getItem('userData'));
                // console.log(userData); // Mostrará { username: 'John', logged: true }

        }
        catch (error) {
            console.error('Error al cargar los datos de usuarios:', error);
        }
    };
        
    return (

        <div className='container-dashboard'>
            <NavBar />  
            <div className='Add'><Link onClick={handleAdd}>Añadir Nuevo</Link></div>
            <div>Cerrar Sesión</div>
            <table className='tableA'>
                <thead>
                    <tr>
                        {columns.map((c, index) => (
                            <th key={index}>{c}</th>
                        ))
                        }
                        <th>Acciones</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        records.map((d, index) => (
                            <tr key={index}>
                                <td>{d.id}</td>
                                <td>{d.nombre}</td>
                                <td>{d.edad}</td>
                                <td>{d.genero}</td>
                                <td>{d.titulo}</td>
                                <td>{d.especialidad}</td>
                                <td>{d.experiencia}</td>
                                <td>{d.materias}</td>
                                <td>{d.telefono}</td>
                                <td>{d.correo}</td>
                                <td>
                                    <Link  to={`/update/${d.id}`} >Modificar</Link>
                                    <button onClick={e => handleDelete(d.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    );

    
}

export default Dashboard;
