import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdDarkMode } from "react-icons/md";
import  "./navbar.css"

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt="Chidinma's logo"
            src="/images/cn-logo-blackbg.png"
            width="50"
            height="50"
          
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-xl gap-4">
            <Nav.Link href="/" className="hover:bg-mintBrown hover-text rounded-md">Home</Nav.Link>
            <Nav.Link href="/about" className="hover:bg-mintBrown hover-text rounded-md ">About</Nav.Link>
            <Nav.Link href="/projects"className="hover:bg-mintBrown hover-text rounded-md ">Projects</Nav.Link>
            <Nav.Link href="/contact"className="hover:bg-mintBrown hover-text rounded-md ">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <span>
            <MdDarkMode className="w-8 h-8"/>
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
