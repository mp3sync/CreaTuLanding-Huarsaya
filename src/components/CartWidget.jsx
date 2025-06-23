import { Badge } from "react-bootstrap";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

const CartWidget = () => {
const {cartQuantity}=useContext(CartContext)



     return (
      <div>
        <img src="/cartwidget.svg" alt="Cart Icon" />
        {cartQuantity() > 0 && <Badge bg="warning" text="dark"> {cartQuantity()} </Badge>}
        
      </div>
    );
  };
  
  export default CartWidget;