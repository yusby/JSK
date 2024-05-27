import {Container, Row, Col}from "react-bootstrap";
import HeroImage from "../assets/img/hero.gif";

import { kelasTerbaru, dataSwiper} from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponent from"../components/FaqComponent"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

function HomePage() {
  let navigate=useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col lg="6">
            <img src={HeroImage} alt="Hero-gif" className="animate__animated animate__fadeInDownBig"/>
          </Col>
          <Col lg="6">
            <h1 className="mb-4 animate__animated animate__fadeInRightBig animate__delay-1s">
              Belajar di <br /> <span>Jobsheetku</span>
            </h1>
            <p className="animate__animated animate__fadeInRightBig animate__delay-1s">
            Selamat datang di platform inovatif kami yang menghadirkan pembelajaran yang praktis dan menyeluruh melalui berbagai metode multimedia!
            </p>
            <button className="header-btn btn-lg rounded-1 me-2 animate__animated animate__zoomIn animate__delay-2s" onClick={()=>navigate("/kelas")}>Lihat Kelas</button>
          </Col>
        </Row>
      </Container>
      </header>
        <div className="kelas w-100 min-vh-100">
          <Container>
            <Row>
              <Col>
              <h1 className="text-center fw-bold">Kelas JobSheet</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Col>
            </Row>
            <Row>
              {kelasTerbaru.map((kelas)=>{
                return (
                <Col key={kelas.id} className="shadow rounded" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                  <img src={kelas.image} alt="unsplash.com" className="mb-5 rounded-top"/>
                  <h5 className="mb-5 px-3" >{kelas.title}</h5>
                  <div className="text-center pb-3"> 
                  </div>
                </Col>
              );
              })}
            </Row>
            <Row>
              <Col className="text-center">
                <button className="btn btn-primary rounded-5 btn-lg" onClick={()=>navigate("/kelas")} data-aos="zoom-in-up" data-aos-duration="1000">
                  Lihat Semua Kelas
                  <i className="fa-solid fa-chevron-right ms-3"></i>
                </button>
              </Col>
            </Row>
          </Container>
        </div>
          <div className="testimonial py-5">
            <Container>
              <Row>
                <Col>
                  <h1 className="text-center fw-bold my-5" data-aos="fade-left" data-aos-duration="1000">Feedback</h1>
                </Col>
              </Row>
              <Row data-aos="fade-left" data-aos-duration="1000">
                  <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  922: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                  
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {dataSwiper.map((data)=>{
              return <SwiperSlide key={data.id} className="shadow-sm">
                <p className="desc">{data.desc}</p>
                <div>
                  <h5 className="mb-1">{data.name}</h5>
                  <p className="m-0 fw-bold">{data.skill}</p>
                </div>
              </SwiperSlide>;
                  } )}
                  </Swiper>
              </Row>  
            </Container>
          </div>
          {/*Section FAQ*/}
          <FaqComponent/>
          {/*Section FAQ*/}        
    </div>
  );
}

export default HomePage