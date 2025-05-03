
import { Badge } from "react-bootstrap";

const CartWidget = () => {
    return (
      <div>
        <img src="/cartwidget.svg" alt="Cart Icon" />
        <Badge bg="warning" text="dark"> 3 </Badge>
        
      </div>
    );
  };
  
  export default CartWidget;