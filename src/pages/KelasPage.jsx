import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { semuaKelas } from '../data/index';
import FaqComponent from '../components/FaqComponent';

const KelasPage = () => {
  const navigate = useNavigate();

  const handleMasukKelasClick = (path) => {
    navigate(path);
  };

  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col data-aos="zoom-in-up" data-aos-duration="1000">
              <h1 className="fw-bold text-center">Semua Kelas</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, magni eaque! Possimus doloremque veritatis fugiat quo neque officiis voluptas rerum!</p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map((kelas) => (
              <Col key={kelas.id} className="shadow rounded" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                <img src={kelas.image} alt="unsplash.com" className="mb-5 rounded-top" />
                <h5 className="mb-5 px-3">{kelas.title}</h5>
                <div className="text-center pb-3">
                  <button className="btn btn-primary" onClick={() => handleMasukKelasClick(kelas.path)}>
                    {kelas.buy}
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default KelasPage;
