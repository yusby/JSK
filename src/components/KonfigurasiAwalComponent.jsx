import React, { useState, useEffect } from 'react';
import { Card, Button, Container, ProgressBar, Modal } from 'react-bootstrap';
import slides from '../data/konfigurasiawal';
import { useNavigate } from 'react-router-dom';
import Bintang1 from "../assets/img/bintang/1.gif";
import Bintang2 from "../assets/img/bintang/2.gif";
import Bintang3 from "../assets/img/bintang/3.gif";
import Bintang4 from "../assets/img/bintang/4.gif";
import Bintang5 from "../assets/img/bintang/5.gif";

const KonfigurasiAwalComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 Menit
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [score, setScore] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [isQuestionCard, setIsQuestionCard] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const navigate = useNavigate(); // Menggunakan useNavigate dari React Router

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    if (currentIndex === slides.length - 1) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex === slides.length - 1) {
      setShowCompletionModal(true);
    } else {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
      setCheckboxChecked(false); // Reset checkbox when moving to next slide
    }
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
  };

  const scrollIntoView = () => {
    const sliderElement = document.getElementById('slider');
    sliderElement.scrollIntoView({ behavior: 'mooth' });
  };

  const progressPercentage = ((currentIndex + 1) / slides.length) * 100;

  const secondsToTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setPopupMessage("Correct!");
      setIsCorrectAnswer(true);
      setCorrectAnswers(correctAnswers + 1);
      setTimeout(() => {
        nextSlide();
      }, 1000);
    } else {
      setPopupMessage("Incorrect! Please try again.");
      setIsCorrectAnswer(false);
      setIncorrectAnswers(incorrectAnswers + 1);
    }
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
    if (!isCorrectAnswer) {
      prevSlide();
    }
  };
  

  const boldifyText = (text, boldText) => {
    return text.replace(new RegExp(`(${boldText})`, 'gi'), '<strong>$1</strong>');
  };

  const processedSlides = slides.map(slide => ({
    ...slide,
    Desc: slide.Desc ? boldifyText(slide.Desc, 'IF') : ''
  }));

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };
  
  const handleCompletionModalClose = () => {
    setShowCompletionModal(false);
    navigate('/keamananjaringan'); // Navigasi ke '/keamananjaringan' menggunakan useNavigate
  };

  return (
    <Container className="mt-5">
      <Card className="text-center shadow">
        <Card.Body>
          <div className="question-card" style={{ padding: '1rem', marginBottom: '1rem' }}>
            {slides[currentIndex] && slides[currentIndex].text && (
              <h3 className="question-text">{slides[currentIndex].text}</h3>
            )}
            {slides[currentIndex] && slides[currentIndex].imageOptions && (
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {slides[currentIndex].imageOptions.map((option) => {
                  return (
                    <li
                      key={option.id}
                      onClick={() => optionClicked(option.isCorrect)}
                      style={{ 
                        cursor: 'pointer', 
                        display: 'inline-block', // Mengatur posisi gambar berdampingan
                        width: 'calc(50% - 1rem)', // Menyusun gambar berdampingan dengan lebar 50% dari wadahnya
                        marginBottom: '0.5rem', 
                        padding: '0.5rem', 
                        border: '1px solid #e9ecef', 
                        borderRadius: '0.25rem', 
                      }}
                    >
                      <img src={option.image} alt={`Option ${option.id}`} style={{ maxWidth: '100%', height: 'auto' }} />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center" style={{ marginTop: '10px' }}>
            {processedSlides[currentIndex] && (
              <>
                <div className="text-center">
                  <h2 style={{ fontSize: '25px' }}>{processedSlides[currentIndex].judul1}</h2>

                  {processedSlides[currentIndex].image && (
                    <img
                      src={processedSlides[currentIndex].image}
                      alt="Slide"
                      className="img-fluid"
                      style={{ maxWidth: '100%', width: '', height: '300px', cursor: 'pointer' }}
                      onClick={handleImageClick}
                    />
                  )}

                  <p style={{ fontSize: '20px', textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: processedSlides[currentIndex].Desc }}></p>

                  <p style={{ fontSize: '16px' }}>{processedSlides[currentIndex].break}</p>

                  {processedSlides[currentIndex].audio && (
                    <audio controls className="mt-3">
                      <source src={processedSlides[currentIndex].audio} type="audio/mpeg" />
                      Browser Anda tidak mendukung elemen audio.
                    </audio>
                  )}
                </div>

                {!isQuestionCard && !slides[currentIndex].imageOptions && (
                  <div className="mt-3">
                    <input
                      type="checkbox"
                      id="nextSlideCheckbox"
                      checked={checkboxChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="nextSlideCheckbox" className="ms-2">Saya sudah membaca dan melakukan.</label>
                  </div>
                )}

                {!isQuestionCard && !slides[currentIndex].imageOptions && (
                  <ProgressBar now={progressPercentage} variant="info" className="w-75 mt-5 mb-3" />
                )}

                {!isQuestionCard && !slides[currentIndex].imageOptions && (
                  <div className="mt-3">
                    <Button variant="primary" className="me-2" onClick={prevSlide}>Previous</Button>
                    <Button variant="primary" onClick={nextSlide} disabled={!checkboxChecked}>Next</Button>
                  </div>
                )}

                <Card className="bg-success text-white p-2 mt-3">
                  <p className="m-0">Waktu hitung mundur: {secondsToTime(timeLeft)}</p>
                </Card>
              </>
            )}
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Image Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={processedSlides[currentIndex] ? processedSlides[currentIndex].image : ""}
            alt="Slide"
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }}
          />
        </Modal.Body>
      </Modal>

      <Modal show={showPopup} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Answer</Modal.Title>
        </Modal.Header>
        <Modal.Body>{popupMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            {isCorrectAnswer ? "Next" : "Back, Try Again!"}
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showCompletionModal} onHide={handleCompletionModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Selamat!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Anda telah menyelesaikan ini.</h4>
          <p>Waktu yang dihabiskan: {secondsToTime(90 * 60 - timeLeft)}</p>
          <p>Jawaban benar: {correctAnswers}</p>
          <p>Jawaban salah: {incorrectAnswers}</p>
          {incorrectAnswers === 0 && <img src={Bintang5} alt="Incorrect 0" />}
          {(incorrectAnswers >= 1 && incorrectAnswers <= 2) && <img src={Bintang4} alt="Incorrect 1-2" />}
          {(incorrectAnswers >= 3 && incorrectAnswers <= 4) && <img src={Bintang3} alt="Incorrect 3-4" />}
          {(incorrectAnswers >= 5 && incorrectAnswers <= 6) && <img src={Bintang2} alt="Incorrect 5-6" />}
          {incorrectAnswers > 6 && <img src={Bintang1} alt="Incorrect more than 6" />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCompletionModalClose}>
            Selesai
          </Button>
        </Modal.Footer>
    </Modal>

    </Container>
  );
};

export default KonfigurasiAwalComponent;

