import {Container, Row, Col} from "react-bootstrap";
import {testimonial} from "../data"; "../data/index.js"


const FeedBackPage = () => {
  return (
      <div className="feedback-page">
        <div className="feedback">
          <Container>
            <Row>
              <Col>
                <h1 className="fw-bold text-center " data-aos="fade-up" data-aos-duration="1500">Semua Feedback</h1>
                <p className="text-center" data-aos="fade-up" data-aos-duration="1500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi distinctio veniam animi expedita quisquam! Quas est quaerat debitis. Amet, expedita.</p>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-1" data-aos="fade-up" data-aos-duration="1500">
            {testimonial.map((data)=>{
              return(
              <Col key={data.id} className="mb-3">
                <div>
                  <h5 className="mb-1 ">{data.name}</h5>
                  <p className="m-0 fw-bold ">{data.skill}</p>
                </div>
                <p className="desc shadow-sm ">{data.desc}</p>
              </Col>
              )
              })}
            </Row>
          </Container>
        </div> 
        
    </div>
  )
}

export default FeedBackPage;