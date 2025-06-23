import { useState } from 'react'

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  
  console.log('Soy ItemCount');
     const comprar = () =>{
        onAdd(count)


     }
 return (
  <div style={{ padding: '10px' }}>
  
    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
      <button className="btn btn-danger" onClick={restar}>-</button>
      <span className="btn">{count}</span>
      <button className="btn btn-success" onClick={sumar}>+</button>
    </div>

    <button className="btn btn-primary" onClick={comprar}>
      Agregar al carrito
    </button>
  </div>
);
}

export default ItemCount
