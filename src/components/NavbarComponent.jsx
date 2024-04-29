import {useState, useEffect } from "react";
import {Nav, Navbar, Container} from "react-bootstrap";
import {navLinks} from "../data/index";
import {NavLink} from "react-router-dom";
 
const NavbarComponent = () => {
  const [changeColor, setCangeColor]= useState(false)

  const chaneBackgroundColor=()=>{
    if (window.scrollY>10){
      setCangeColor(true);
    } else{
      setCangeColor(false);
    }
  }

  useEffect(()=>{
    chaneBackgroundColor();
    window.addEventListener("scroll", chaneBackgroundColor)
  } 

)

  return (
    <div>
    <Navbar expand="lg" className={changeColor?"color-active":""}>
          <Container>
            <Navbar.Brand class="nav-logo text-white">JobSheetKu.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                {navLinks.map((link)=>{
                  return(
                    <div className="nav-link" key={link.id}>
                      <NavLink to={link.path}className={({ isActive, isPending }) => isPending ? "pending" :
                        isActive ? "active" : ""}end>
                          {link.text}
                      </NavLink>
                    </div>
                  );
                })}                
              </Nav>

              <div>
                <button className="btn btn-outline-light text-center">Join Now</button>
              </div>

            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavbarComponent