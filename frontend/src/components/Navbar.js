import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom"

export function Navegacion() {
  return (
    <div className="sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/Home">4-Devs</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Productos">Lista de Productos</Nav.Link>
              <Nav.Link as={Link} to="/Gestionar">Gestionar Producto</Nav.Link>
              <Nav.Link as={Link} to="/Ventas">Lista de Ventas</Nav.Link>
              <Nav.Link as={Link} to="/Cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
