import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';

const ItemDetail = ({ detalle }) => {
    const onAdd = (cantidad) => {
         console.log (`Compraste ${cantidad} del item ${detalle.name}`)
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
          <h3 className="text-primary">${detalle.price}</h3>
          <p className="text-muted">Stock: {detalle.stock} unidades</p>
          <ItemCount stock={detalle.stock} onAdd={onAdd} />
       
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
