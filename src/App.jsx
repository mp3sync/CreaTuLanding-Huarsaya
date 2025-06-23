import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReactBootstrap from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <NavbarReactBootstrap />
     
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="¡Bienvenid@ a nuestra tienda de papelería kawaii!🌸 " />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estás en la categoría: "/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        <Route path='/cart/' element= {<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
       </CartProvider>
    </BrowserRouter>
  );
}

export default App;
