import React, {useContext, useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import {CartContext} from '../context/CartContext'
import { formatPrice } from '../components/utils/formatPrice';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const ItemDetail = ({ detalle }) => {
 
  const [compra,setCompra]=useState(false)
  const {addItem} = useContext (CartContext)

    const onAdd = (cantidad) => {
      setCompra(true)
        
         console.log (`Compraste ${cantidad} del item ${detalle.name}`)
         addItem (detalle,cantidad)
         Swal.fire({
          position: 'top-end',
          icon:'success',
          title: `Agregaste ${detalle.name} al carrito`,
          showCancelButton:false,
          background: '#fff0f5',
          timer:1500
      
         })
    }
    
    

  return (
    <Container className="mt-5 pt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img 
            src={detalle.img} 
            alt={detalle.name} 
            className="img-fluid rounded" 
            style={{ border: '1px solid #9324B3' }} 
          />
        </Col>
        <Col md={6}>
          <h2 className="mb-4">{detalle.name}</h2>
          <p className="lead">{detalle.description}</p>
          <h3 className="text-primary">{formatPrice(detalle.price)}</h3>
          <p className="text-muted">Stock: {detalle.stock} unidades</p>
         {compra
         ?
         <div style={{
            width: '60%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 auto' 
          }}>
            <Link to='/' className='btn btn-primary'>Seguir comprando</Link>
            <Link to='/cart' className='btn btn-outline-primary'>Ir al carrito</Link>
          </div>
          : <ItemCount stock={detalle.stock} onAdd={onAdd} />}
       
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
