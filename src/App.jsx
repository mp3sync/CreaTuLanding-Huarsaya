import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReactBootstrap from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';


function App() {
  return (
    <>
      <NavbarReactBootstrap />
      <ItemListContainer greeting="¡Bienvenid@ a nuestra tienda de papelería kawaii!" />
    </>
  );
}

export default App;
