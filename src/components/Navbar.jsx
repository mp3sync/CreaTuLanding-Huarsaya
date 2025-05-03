import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavbarReactBootstrap() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary py-4 shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          <img src='../logo.svg' alt='logo' style={{width:'18rem'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="Home">Inicio</Nav.Link>
          <NavDropdown title="Escritura" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1.1">Lápices</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">Marcadores</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">Portaminas y minas</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cuadernos y Papel" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/2.1">Cuadernos kawaii</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">Agendas y planificadores</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3">Notebooks</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Organización" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Carpetas y archivadores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Folders y sobres</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cartucheras</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap;