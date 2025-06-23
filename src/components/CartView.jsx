import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const CartView = () => {
    const { cart, cartTotal, clear } = useContext(CartContext);
    const preConfirm = () => {
     Swal.fire({
              title: '¿Vaciar carrito? 🛒',
              text: '¿Estás segur@ de eliminar todos los productos?',
              showDenyButton:true,
              denyButtonText: 'No',
              background: '#fff0f5',
              confirmButtonText: 'Sí, eliminar 💔',
            
              
           }).then((result) => {
      if (result.isConfirmed) {
        clear();
        Swal.fire({
          icon: 'success',
          title: 'Carrito vacío',
          text: 'Todos los productos han sido eliminados 🧹',
          confirmButtonColor: '#ff69b4',
          background: '#fff0f5'
        });

}

             })

             }

    return (
        <div className="container mt-5 pt-5">
            <h2 className="mb-4">Tu carrito</h2>

          
            <div className="row fw-bold text-center border-bottom pb-2">
                <div className="col-4">Producto</div>
                <div className="col-2">Precio unitario</div>
                <div className="col-2">Cantidad</div>
                <div className="col-2">Precio final</div>
                <div className="col-2"></div>
            </div>

          
            {cart.map((compra) => (
                <CartItem key={compra.id} compra={compra} />
            ))}


            <div className="text-end mt-4 fs-5">
                Total a pagar: <strong>s/ {cartTotal().toFixed(2)}</strong>
            </div>

            <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-danger" onClick={preConfirm}>Borrar</button>
                <Link to='/checkout' className="btn btn-dark">Terminar compra</Link>
            </div>
        </div>
    );
};

export default CartView;
