import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div style={{ padding: '100px' }}>
        <h2>La ruta no existe</h2>
        <Link className= 'btn btn-primary' to='/'>Volver a home</Link>
    </div>
  )
}

export default Error