import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavbarReactBootstrap() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary py-4 shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          <img src='../logo.svg' alt='logo' style={{width:'18rem'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
          <NavDropdown title="Escritura" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/Lápices'>Lápices</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/Marcadores'>Marcadores</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/Portaminasyminas'>Portaminas y minas</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cuadernos y Papel" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/Cuadernoskawaii'>Cuadernos kawaii</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/Agendasyplanificadores'>Agendas y planificadores</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/Notebooks'>Notebooks</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Organización" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/Carpetasyarchivadores'>Carpetas y archivadores</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/Foldersysobres'>Folders y sobres</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/Cartucheras'>Cartucheras</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap;