import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './../styles/dashboard.css'
import { Link } from 'react-router-dom';
const Dashboard = () => {

    const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);
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
    return (
        <div className='container-dashboard'>
            <div className='Add'><Link to="/create" >Añadir Nuevo</Link></div>
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
                                    <Link to={`/update/${d.id}`} >Modificar</Link>
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
