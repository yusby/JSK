import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from '../data/index'; 

const FaqComponent = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold " data-aos="flip-up" data-aos-duration="1000">Pertanyaan yang sering ditanyakan</h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-3 pt-4">
          {faq.map((data) => {
            return(
              <Col key={data.id}>
                <Accordion className="shadow-sm" data-aos="flip-up" data-aos-duration="1000" data-aos-delay={faq.delay}>
                  <Accordion.Item eventKey={data.eventKey}>
                  <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>{data.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            )
          })}
        </Row>
      </Container>
     


    </div>
  )
}

export default FaqComponent