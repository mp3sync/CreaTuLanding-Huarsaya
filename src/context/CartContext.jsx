import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    console.log(item, cantidad, "desde el contexto");
    console.log({ ...item, quantity: cantidad }, "desde el contexto");

    if (isInCart(item.id)) {
      console.log("sumar cantidades");
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + cantidad };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: cantidad }]);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  }; 

  const cartTotal = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, clear, removeItem, cartQuantity, cartTotal }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
