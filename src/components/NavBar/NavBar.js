import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NavBar({ color, title = "HUTECH" }) {
  return (
    <Navbar bg={color} expand="lg" className="mb-3">
      <Navbar.Brand className="text-white">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link
            to="/"
            className="text-white text-center decoration-none font-weight-bold pr-3"
          >
            So sánh
          </Link>
          <Link
            to="/timkiem"
            className="text-white text-center decoration-none font-weight-bold pr-3"
          >
            Lưu file
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
