import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Todo-List App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/*SPA: dùng link to kh bị load lại page */}
            <Link to="/" className="nav-link active">
              Home
            </Link>
            <Link to="/users" className="nav-link">
              User
            </Link>
            <Link to="/admins" className="nav-link">
              Admin
            </Link>
            <Link to="/counter" className="nav-link">
              Counter
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
