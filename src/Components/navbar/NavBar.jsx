import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import  "./navbar.css"
import { useState, useEffect } from "react";

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-light border-2 border-b-mintBrown">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt="Chidinma's logo"
            src="/images/cn-logo-blackbg.png"
            width="50"
            height="50"
            className=""
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
            <Nav.Link onClick={toggleDarkMode}>
              <span>
                {darkMode ? (
                  <MdLightMode className="w-8 h-8"/>
                 ) : (
                  <MdDarkMode className="w-8 h-8 "/>
                 )}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
