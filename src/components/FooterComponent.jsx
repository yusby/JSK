import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
    <Container>
      <Row className="d-flex justify-content-between">
        <Col lg="5">
          <h3 className="fw-bold">JobSheetKu</h3>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, et non eos minus reiciendis molestiae nobis nemo ipsam nisi saepe?</p>
          <div className="no mb-1 mt-4">
            <Link className="text-decoration-none">
              <i className="fab fa-whatsapp"></i>
              <p className="m-0">+6281223808334</p>
              </Link>
          </div>
          <div className="mail">
            <Link className="text-decoration-none">
              <i className="far fa-envelope"></i>
              <p className="m-0">yusufbachtiar@upi.edu</p>
            </Link>
          </div>
        </Col>
        <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
          <h5 className="fw-bold">Menu</h5>
          <Link to="">Home</Link>
          <Link to="kelas">Kelas</Link>
          <Link to="feedback">Feedback</Link>
          <Link to="faq">FAQ</Link>
          <Link to="sk">Syarat dan Ketentuan</Link>
        </Col>
        <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3">Suport</h5>
          <div className="suport">
            <input type="text" placeholder="Suport..."/>
            <button className="btn btn-primary rounded-end ">Suport</button>
          </div>
          <div className="sosial mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center px-md-0">Develoved 2024 by <span className="fw-bold">Yusuf Bachtiar</span> ,All Right Reserved.</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default FooterComponent;