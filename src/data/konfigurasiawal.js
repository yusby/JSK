import Audio1 from "../assets/audio/audio1.mp3";
import ImgQuiz1True from "../assets/img/quiz/qj1-1true.jpg";
import ImgQuis1False from "../assets/img/quiz/qj1-1false.jpg";
import ImgQuiz2True from "../assets/img/quiz/2.setelahaddIP.jpg";
import ImgQuis2False from "../assets/img/quiz/2.setelahaddIPsalah.jpg";
import ImgQuiz3True from "../assets/img/quiz/3.setupdhcp.jpg";
import ImgQuis3False from "../assets/img/quiz/3.setupdhcpsalah.jpg";

import ImgD from "../assets/img/jobsheet1/imgd.png";
import ImgE from "../assets/img/jobsheet1/imge.png";
import ImgF from "../assets/img/jobsheet1/imgf1.gif";
import Img1 from "../assets/img/jobsheet1/petunjuk.gif";
import Img2 from "../assets/img/jobsheet1/peraturankerja.gif";
import Img3 from "../assets/img/jobsheet1/keselamatankerja.gif";
import ImgS1 from "../assets/img/jobsheet1/1.LoginMikrotikMenggunakanWinboxNew.gif";
import ImgS2 from "../assets/img/jobsheet1/2. Antarmuka.gif";
import ImgS3 from "../assets/img/jobsheet1/3.DHCPServerNew.gif";
import ImgG from "../assets/img/jobsheet1/imgf15.gif";



const konfigurasiawal = [
  {
    id: 1,
    judul1: 'A. Petunjuk',
    Desc: `1. Mulailah dengan membaca sebelum mengajukan pertanyaan <br>
    2. Periksa dengan cermat kelengkapan dokumen jobsheet yang telah diberikan.<br>
    3. Ucapkan Syukur setiap kali berhasil menyelesaikan suatu masalah.<br>
    4. Anda diharapkan bekerja dengan metode yang terstruktur sesuai dengan petunjuk<br>
    langkah kerja yang telah diberikan.<br>
    5. Patuhi aturan dan keselamatan kerja saat praktikum.<br>
    6. Berikan bantuan kepada teman yang kesulitan memahami petunjuk langkah kerja.`,
    break: '',
    audio: Audio1,
    image:Img1
  },
  {
    id: 2,
    judul1: 'B. Peraturan Kerja',
    Desc: `1. Dilarang menggunakan HP selama praktikum.<br>
      2. Dilarang meninggalkan area praktikum tanpa izin instruktur.<br>
      3. Dilarang membuka aplikasi lain selain Winbox dan situs web Jobsheetku.<br>
      4. Penggunaan alat harus dilakukan dengan hati-hati dan teliti sesuai dengan fungsi dan<br>
      prosedur yang telah ditetapkan.<br>
      5. Simpan kembali alat yang telah digunakan ke tempatnya dengan rapih`,
    audio: Audio1,
    image:Img2
  },
  {
    id: 3,
    judul1: 'C. Keselamatan Kerja',
    Desc: `1. Diwajibkan menggunakan baju yang rapih dan sopan untuk praktikum.<br>
    2. Setiap perlatan jaringan harus dinyalakan dan dimatikan sesuai dengan prosedur yang<br>
    telah ditetapkan.<br>
    3. Setelah kegiatan praktikum selesai, penting untuk memastikan bahwa kabel power<br>
    dari setiap peralatan jaringan tidak terhubung dengan sumber daya.`,
    audio: Audio1,
    image:Img3
  },
  {
    id: 4,
    judul1: 'D. Daftar Peralatan Kerja',
    audio: Audio1,
    image: ImgD
  },
  {
    id: 5,
    judul1: 'E. Tugas',
    Desc: 'Anda ditugaskan mengamankan service ssh dan telnet di Router ini dari serangan BruteForce dengan menggunakan alat yang telah disediakan dengan gambar topologi di atas ini :',
    audio: Audio1,
    image: ImgE
  },
  {
    ide :6,
    judul1: 'F. Langkah Kerja',
    Desc: `1. Berdoa sebelum kegiatan dilaksanakan<br>
    2. Terlebih dahulu pahami tugas yang telah diberikan.<br>
    3. Periksa alat yang dibutuhkan untuk mengamankan
    Router dari serangan BruteForce. <br>
    4. Pastikan PC sudah dalam keadaan siap digunakan.<br>
    Jika anda menemukan kekurangan atau kerusakan segera laporkan ke instruktur!`,
    image: ImgF,
    audio: Audio1
  },
  {
    id: 7,
    judul1: '5. Login Mikrotik',
    image: ImgS1,
    audio: Audio1,
    Desc: `1) Buka aplikasi Winbox<br>
    2) Pastikan IP Address<br>
    dalam keadaan 0.0.0.0<br>
    3) Klik <strong>MAC Address</strong>.<br>
    4) Klik <strong>Connect</strong> tunggu hingga proses<br>
    loading selesai.`
    //1
  },
  {
    id: 8,
    text: "Yang manakah tampilan yang benar?",
    imageOptions: [
      { id: 0, image: ImgQuis1False , isCorrect: false },
      { id: 1, image: ImgQuiz1True , isCorrect: true },
    ],
  },
  {
    id: 9,
    judul1: 'Konfigurasi Antarmuka Router',
    image: ImgS2,
    audio: Audio1,
    Desc: `“Konfigurasi ini dilakukan agar
    memberikan yang interface router
    yang digunakan memiliki alamat IP
    sehingga dapat diidentifikasi oleh
    jaringan” <br><br>
    1) Setelah proses koneksi ke
    perangkat MikroTik selesai, Anda
    akan melihat tampilan seperti ini
    muncul di layar.<br>
    2) Klik menu <strong>IP</strong> kemudian <strong>Address</strong>. <br>
    3) Pada sub menu address list, klik
    icon <strong>+</strong> <br>
    4) Input rentang IP local dalam
    kolom address (192.168.10.1/24).<br>
    5) Kosongkan baris Network<br>
    6) Pilih interface ether 2<br>
    7) Klik <strong>Apply</strong> lalu <strong>OK</strong> <br>
    `
    //2
  },
  {
    id: 10,
    text: "Yang manakah tampilan yang benar?",
    imageOptions: [
      { id: 0, image: ImgQuis2False , isCorrect: false },
      { id: 1, image: ImgQuiz2True , isCorrect: true },
    ],
  },
  {
    id: 11,
    judul1: 'Konfigurasi DHCP Server',
    image: ImgS3,
    audio: Audio1,
    Desc: `“Konfigurasi ini dilakukan agar
    setiap PC client mendapat IP address
    secara otomatis” <br><br>
    1) Klik menu IP kemudian DHCP Server.<br>
    2) Pada sub menu DHCP Server, klik <strong>DHCP Server</strong> . <br>
    3) Pada bagian DHCP Server Interface pilih interface ether2, lalu klik <strong>Next</strong> sampai DHCP “Setup has complete successfully” <br>
    4) Klik <strong>OK</strong>.
    `
    //3
  },
  {
    id: 12,
    text: "Yang manakah tampilan yang benar?",
    imageOptions: [
      { id: 0, image: ImgQuis3False , isCorrect: false },
      { id: 1, image: ImgQuiz3True , isCorrect: true },
    ],
  },
  {
    judul1: 'Penutup',
    image: ImgG,
    audio: Audio1,
    Desc: `
    1. Siap untuk langkah kerja selanjutnya`
  }
]
export default konfigurasiawal;