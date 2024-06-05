import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { keamananjaringan } from '../data/keamananjaringan';

const KeamananJaringan = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100 d-flex justify-content-center align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="fw-bold text-center mb-2" data-aos="zoom-in" data-aos-duration="1500">Keamanan Jaringan</h1>
              <p className="text-center" data-aos="zoom-in" data-aos-duration="1500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, quas.</p>
            </Col>
          </Row>
          {/* Menggunakan map untuk merender Card untuk setiap jobsheet */}
          {keamananjaringan.map((jobsheet) => (
            <Row key={jobsheet.id} className="mb-3 justify-content-center">
              <Col md={8}>
                <Card className="text-start"> {/* Menambahkan kelas text-start di sini */}
                  <Card.Header className="text-center">{jobsheet.title}</Card.Header> {/* Header tetap di tengah */}
                  <Card.Body>
                    <Card.Title className="text-start">Tentang</Card.Title>
                    <Card.Text className="text-start">{jobsheet.desc}</Card.Text>
                    {jobsheet.faculty && <Card.Text className="text-start">{jobsheet.faculty}</Card.Text>}
                    {jobsheet.studyProgram && <Card.Text className="text-start">{jobsheet.studyProgram}</Card.Text>}
                    {jobsheet.course && <Card.Text className="text-start">{jobsheet.course}</Card.Text>}
                    {jobsheet.semester && <Card.Text className="text-start">{jobsheet.semester}</Card.Text>}
                    {jobsheet.timeAllocation && <Card.Text className="text-start">{jobsheet.timeAllocation}</Card.Text>}
                    <div className="d-flex justify-content-center mt-3">
                      <NavLink to={jobsheet.NavLink} className="btn btn-primary">Mulai</NavLink>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </div>
  );
}

export default KeamananJaringan;
