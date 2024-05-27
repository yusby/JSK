import React, { useState, useEffect } from 'react';
import { Card, Button, Container, ProgressBar } from 'react-bootstrap';
import Audio1 from "../assets/audio/audio1.mp3";
import ImgStep1 from "../assets/img/jobsheet1/step1.gif";

const Jobsheet2Component = () => {
  const slides = [
    {
      judul1: 'A. Petunjuk',
      Desc: `1. Mulailah dengan membaca sebelum mengajukan pertanyaan
      2. Periksa dengan cermat kelengkapan dokumen jobsheet yang telah diberikan.
      3. Ucapkan Syukur setiap kali berhasil menyelesaikan suatu masalah.
      4. Anda diharapkan bekerja dengan metode yang terstruktur sesuai dengan petunjuk
      langkah kerja yang telah diberikan.
      5. Patuhi aturan dan keselamatan kerja saat praktikum.
      6. Berikan bantuan kepada teman yang kesulitan memahami petunjuk langkah kerja.`,
      break:'',
      audio: Audio1
    },
    {
      judul1: 'B. Peraturan Kerja',
      Desc: `1. Dilarang menggunakan HP selama praktikum.
      2. Dilarang meninggalkan area praktikum tanpa izin instruktur.
      3. Dilarang membuka aplikasi lain selain Winbox dan situs web Jobsheetku.
      4. Penggunaan alat harus dilakukan dengan hati-hati dan teliti sesuai dengan fungsi dan
      prosedur yang telah ditetapkan.
      5. Simpan kembali alat yang telah digunakan ke tempatnya dengan rapih`,
      audio: Audio1
    },
    {
      judul1: 'C. Keselamatan Kerja',
      Desc: `1. Diwajibkan menggunakan baju yang rapih dan sopan untuk praktikum.
      2. Setiap perlatan jaringan harus dinyalakan dan dimatikan sesuai dengan prosedur yang
      telah ditetapkan.
      3. Setelah kegiatan praktikum selesai, penting untuk memastikan bahwa kabel power
      dari setiap peralatan jaringan tidak terhubung dengan sumber daya.`
    },
    {
      judul1:'Login Mikrotik',
      image: ImgStep1,
      audio: Audio1,
      Desc:`1) Buka aplikasi Winbox
      2) Pastikan IP Address
      dalam keadaan 0.0.0.0
      3) Klik MAC Address.
      4) Klik tunggu hingga proses
      loading selesai.`
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
  };

  const progressPercentage = ((currentIndex + 1) / slides.length) * 100;

  const secondsToTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <Container className="mt-5">
      <Card className="text-center shadow">
        <Card.Body>
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ marginTop: '10px' }}>
            <div className="text-center">
              <h2 style={{ fontSize: '20px' }}>{slides[currentIndex].judul1}</h2>
              

              {slides[currentIndex].image && (
                <img src={slides[currentIndex].image} alt="Slide" className="img-fluid" style={{ maxWidth: '100%', width: '50%', height: 'auto' }} />
              )}
              
              <p style={{ fontSize: '16px' }}>{slides[currentIndex].Desc}</p>

              <p style={{ fontSize: '16px' }}>{slides[currentIndex].break}</p>

              {slides[currentIndex].audio && (
                <audio controls className="mt-3">
                  <source src={slides[currentIndex].audio} type="audio/mpeg" />
                  Browser Anda tidak mendukung elemen audio.
                </audio>
              )}
            </div>
            <ProgressBar now={progressPercentage} variant="info" className="w-75 mt-5 mb-3" />
            <div className="mt-3">
              <Button variant="primary" className="me-2" onClick={prevSlide}>Previous</Button>
              <Button variant="primary" onClick={nextSlide}>Next</Button>
            </div>
            <Card className="bg-success text-white p-2 mt-3">
              <p className="m-0">Waktu hitung mundur: {secondsToTime(timeLeft)}</p>
            </Card>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Jobsheet2Component;
