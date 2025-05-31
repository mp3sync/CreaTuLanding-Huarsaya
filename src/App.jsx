import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReactBootstrap from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavbarReactBootstrap />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="¡Bienvenid@ a nuestra tienda de papelería kawaii!" />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estás en la categoría: "/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
