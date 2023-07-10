import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Learning Hooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/*SPA: dùng link to kh bị load lại page */}
            <Link to="/" className="nav-link">
              UseEffect
            </Link>
            <Link to="/users" className="nav-link">
              UseReducer
            </Link>
            <Link to="/admins" className="nav-link">
              UseState
            </Link>
            <Link to="/edit" className="nav-link">
              UseContext
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
