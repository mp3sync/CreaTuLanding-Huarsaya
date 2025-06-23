import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const CartItem = ({ compra }) => {
  const { removeItem } = useContext(CartContext);

  const confirmarEliminacion = () => {
    Swal.fire({
      title: '¿Eliminar este item?',
      text: `"${compra.name}" será eliminado del carrito 🛒`,
      showCancelButton: true,
      background: '#fff0f5',
      confirmButtonText: 'Sí, eliminar 💔',
      cancelButtonText: 'No',
       cancelButtonColor: '#dc3741'  
      ,
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(compra.id);
        Swal.fire({
          title: 'Eliminado 💨',
          text: `"${compra.name}" fue retirado del carrito`,
          icon: 'success',
        
        });
      }
    });
  };

  return (
    <div className="row align-items-center text-center py-2 border-bottom">
      <div className="col-4 d-flex align-items-center gap-3">
        <img src={compra.img} alt={compra.name} style={{ width: '60px' }} />
        <span>{compra.name}</span>
      </div>
      <div className="col-2">s/ {compra.price.toFixed(2)}</div>
      <div className="col-2">{compra.quantity}</div>
      <div className="col-2">s/ {(compra.price * compra.quantity).toFixed(2)}</div>
      <div className="col-2">
        <button className="btn btn-danger btn-sm" onClick={confirmarEliminacion}>X</button>
      </div>
    </div>
  );
};

export default CartItem;
