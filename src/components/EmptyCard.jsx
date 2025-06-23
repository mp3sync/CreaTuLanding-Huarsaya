import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCard = () => {
  return (
    <div className="mt-5 pt-5">     
        <h2>¡Tu carrito esta vacio! </h2>
        <h4>Te invitamos a ver nuestros productos kawaii :D </h4>
        <Link className= 'btn btn-primary' to= '/'>Ver productos</Link>
    </div>
  )
}

export default EmptyCard
