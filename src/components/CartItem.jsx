import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ compra }) => {
    const { removeItem } = useContext(CartContext);

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
                <button className="btn btn-danger btn-sm" onClick={() => removeItem(compra.id)}>X</button>
            </div>
        </div>
    );
};

export default CartItem;
