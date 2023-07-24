import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import { useNavigate, useLocation } from 'react-router-dom'

const Delete = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  console.log(state);
  
  const onLogout = () => {
    navigate('/', 
    {
      replace: true,
    }
    );
    console.log('¡Cerró sesión correctamente!');
  }

  return (
    <div className='NavBar'>
      <span className='name-navbar'>{state?.username}</span>
      <button className='btn-logout' onClick={onLogout}>
        Cerrar Sesión
      </button>
    </div>
  )
}

export default Delete;