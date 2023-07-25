

import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {

    const {state} = useLocation();
  return (
    state?.logged ? children : <Navigate to="/" />
  )
}

export default PrivateRoute