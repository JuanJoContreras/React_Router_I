import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar bg="primary" variant="light">
        <Container className="justify-content">          
          <Link to="/" className="text-white ms-3 text-decoration-none">
          🏠 Home
          </Link>          
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
          Contacto
          </Link>
          <Navbar.Brand className="text-white ">Happy Cake</Navbar.Brand> 🍰
        </Container>
      </Navbar>
    </>
  );
}