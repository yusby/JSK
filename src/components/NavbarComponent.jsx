import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setCangeColor] = useState(false);

  const chaneBackgroundColor = () => {
    if (window.scrollY > 10) {
      setCangeColor(true);
    } else {
      setCangeColor(false);
    }
  };

  useEffect(() => {
    chaneBackgroundColor();
    window.addEventListener("scroll", chaneBackgroundColor);
    return () => {
      window.removeEventListener("scroll", chaneBackgroundColor);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={changeColor ? "color-active" : ""}
      style={{ position: "fixed", width: "100%", zIndex: "100", top: "0" }} // Added position fixed
    >
      <Container>
        <Navbar.Brand style={{ color: "white", fontSize: "24px" }}>JobSheetKu.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((link) => (
              <div className="nav-link" key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}
                  end
                >
                  {link.text}
                </NavLink>
              </div>
            ))}
          </Nav>
          <div>
            <button className="btn btn-outline-light text-center">Join Now</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
