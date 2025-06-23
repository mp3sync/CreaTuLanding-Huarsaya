import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartView from "./CartView";
import EmptyCard from "./EmptyCard";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.length ? <CartView /> : <EmptyCard />}
    </>
  );
};

export default Cart;