import Audio1 from "../assets/audio/audio1.mp3";
import ImgStep1 from "../assets/img/jobsheet1/step1.gif";
import ImgQuiz1True from "../assets/img/quiz/qj1-1true.jpg";
import ImgQuis1False from "../assets/img/quiz/qj1-1false.jpg";
import ImgQuiz2True from "../assets/img/quiz/2.setelahaddIP.jpg";
import ImgQuis2False from "../assets/img/quiz/2.setelahaddIPsalah.jpg";
import ImgQuiz3True from "../assets/img/quiz/3.setupdhcp.jpg";
import ImgQuis3False from "../assets/img/quiz/3.setupdhcpsalah.jpg";
import ImgQuis4True from "../assets/img/quiz/4. acc telnet.jpg";
import ImgQuis5True from "../assets/img/quiz/5.addaddresstelnet.jpg";
import ImgQuis6True from "../assets/img/quiz/6. pindahkan rule drop ke paling atas after.jpg";
import ImgQuis6False from "../assets/img/quiz/6. pindahkan rule drop ke paling atas.jpg";
import ImgQuis7True from "../assets/img/quiz/7. acc ssh.jpg";
import ImgQuis8True from "../assets/img/quiz/8. add address ssh.jpg";
import ImgQuis9True from "../assets/img/quiz/9. ubah rule drop sesudah.jpg";
import ImgQuis9False from "../assets/img/quiz/9. ubah rule drop sebelum.jpg";
import ImgQuis10True from "../assets/img/quiz/10. daftar blacklist.jpg";
import ImgQuis10False from "../assets/img/quiz/10. daftar blacklist kosong.jpg";
import ImgQuis11True from "../assets/img/quiz/11. button benar.jpg";
import ImgQuis11False from "../assets/img/quiz/11. button salah.jpg";

import ImgD from "../assets/img/jobsheet1/imgd.png";
import ImgE from "../assets/img/jobsheet1/imge.png";
import ImgF from "../assets/img/jobsheet1/imgf1.gif";
import ImgG from "../assets/img/jobsheet1/imgf15.gif";
import ImgH from "../assets/img/jobsheet1/imgf7.gif";
import Img1 from "../assets/img/jobsheet1/petunjuk.gif";
import Img2 from "../assets/img/jobsheet1/peraturankerja.gif";
import Img3 from "../assets/img/jobsheet1/keselamatankerja.gif";
import ImgS1 from "../assets/img/jobsheet1/1.LoginMikrotikMenggunakanWinboxNew.gif";
import ImgS2 from "../assets/img/jobsheet1/2. Antarmuka.gif";
import ImgS3 from "../assets/img/jobsheet1/3.DHCPServerNew.gif";
import ImgS4 from "../assets/img/jobsheet1/4.acctelnet1.gif";
import ImgS5 from "../assets/img/jobsheet1/5. acc telnet 2 compress.gif";
import ImgS6 from "../assets/img/jobsheet1/6. add address telnet 1.gif";
import ImgS7 from "../assets/img/jobsheet1/7. add address telnet 2 compress.gif";
import ImgS8 from "../assets/img/jobsheet1/8. rule drop 1.gif";
import ImgS9 from "../assets/img/jobsheet1/9. rule drop 2 compress.gif";
import ImgS10 from "../assets/img/jobsheet1/10. acc ssh 1.gif";
import ImgS11 from "../assets/img/jobsheet1/11. acc ssh 2.gif";
import ImgS12 from "../assets/img/jobsheet1/12. add address ssh 1.gif";
import ImgS13 from "../assets/img/jobsheet1/13. add address ssh 2.gif";
import ImgS14 from "../assets/img/jobsheet1/14. testing telnet.gif";
import ImgS15 from "../assets/img/jobsheet1/15. testing ssh.gif";


const slides = [
  {
    id: 13,
    judul1: 'Konfigurasi Pencegahan BruteForce',
    image: ImgS4,
    audio: Audio1,
    Desc: `<Strong>Step 1</strong><br><br>
    “Konfigurasi Rule Firewall untuk
    mencegah serangan Telnet di Router
    ini” <br>
    <br> 1) Klik menu <Strong>IP</strong> kemudian <Strong>Firewall</strong> 
    <br> 2) Pada sub menu Firewall klik <Strong>Filter Rules</strong>
    <br> 3) Klik + untuk mebuat New Firewall Rule
    <br> 4) Klik menu <strong>General</strong>
    <br> 5) Input Chain dengan klik tanda panah ke bawah lalu pilih “ouput”
    <br> 6) Input Protocol dengan “6(tcp)”
    <br> 7) Input Src Port “23”
    `
    //4
  },
  
  {
    id: 15,
    judul1: 'Konfigurasi Pencegahan BruteForce',
    image: ImgS5,
    audio: Audio1,
    Desc:`<br> 8) Klik menu Klik menu <strong>Advanced</strong>
    <br> 9) Input parameter Content “Login failed. Incorect username or password”
    <br> 10) Klik menu Klik menu <strong>Extra</strong>
    <br> 11) Klik icon panah ke atas pada Dst.Limit
    <br> 12) Input Rate 1/min
    <br> 13) Input Burst “2”
    <br> 14) Klik tanda panah ke bawah pada Limit By lalu pilih “src.and dst. Addresses”
    <br> 15) Klik menu <strong>Action</strong>
    <br> 16) Input Action “accept”
    <br> 17) Klik <strong>Apply</strong> lalu <strong>OK</strong>
    `
    //5
  },
  {
    id: 14,
    text: "Yang manakah tampilan yang benar? ",
    imageOptions: [
      { id: 0, image: ImgQuis4True , isCorrect: true },
      { id: 1, image: ImgQuis5True , isCorrect: false },
    ],
  },
  
  {
    id:17,
    judul1: 'Konfigurasi Pencegahan BruteForce',
    image: ImgS6,
    audio: Audio1,
    Desc: ` <Strong>Step 2</strong><br><br>
      “Konfigurasi ini digunakan untuk
      melakukan drop terhadap IP address
      yang telah masuk kedalam daftar
      blacklist”<br>
      <br> 18) Klik +untuk mebuat New Firewall Rule
      <br> 19) Klik menu <strong>General</strong>
      <br> 20) Input Chain dengan klik icon panah ke bawah lalu pilih “ouput”
      <br> 21) Input Protocol dengan “6(tcp)”
      <br> 22) Input Src Port “23”
      `
      //6
  },
  {
    id:18,
    judul1: 'Konfigurasi Pencegahan BruteForce',
    image: ImgS7,
    audio: Audio1,
    Desc: `<br> 23) Klik menu <Strong>Advanced</Strong>
    <br> 24) Input parameter Content “Login
    failed. Incorect username or
    password”
    <br> 25) Pilih menu <Strong>Action</Strong>
    <br> 26) Input Action dengan klik icon panah ke bawah lalu pilih “add dst to address list”
    <br> 27) Input Address List dengan
    “blacklist”
    <br> 28) Input Timeout dengan “10d
    00:00:00”
    <br> 29) Klik <strong>Apply</strong> lalu <strong>OK</strong>
    <br> IP gagal login akan dimasukkan
    kedalam Address list dan diblacklist
    selama 10 hari.
    `
    //7
  },  
  {
    id: 16,
    text: "Yang manakah tampilan yang benar? 2",
    imageOptions: [
      { id: 0, image: ImgQuis4True , isCorrect: false },
      { id: 1, image: ImgQuis5True , isCorrect: true },
    ],
  },
  
  {
    id: 20,
    judul1: 'Konfigurasi Pencegahan BruteForce',
    image: ImgS8,
    audio: Audio1,
    Desc: ` <Strong>Step 3</strong><br><br>
      “Konfigurasi ini digunakan untuk
      menangkap IP address yang gagal
      login telnet <br> lebih dari 3x dan akan
      dianggap blacklist sesuai waktu yang
      ditentukan.”<br>
      <br> 30) Klik + untuk mebuat New Firewall Rule
      <br> 31) Klik menu <Strong>General</Strong>
      <br> 32) Input Chain dengan klik tanda panah ke bawah lalu pilih “ouput”
      <br> 33) Input Protocol dengan “6(tcp)”
      <br> 34) Input Dst. Port “23”
      `
      //8
  },
  {
    id: 21,
    judul1: 'Konfigurasi Pencegahan BruteForce',
    image: ImgS9,
    audio: Audio1,
    Desc: `<br> 35) Klik menu <Strong> Advanced </Strong>
    <br> 36) Input Src. Address List dengan klik tanda pabah ke bawah lalu pilih “blacklist”
    <br> 37) Klik menu <Strong> Action </Strong>
    <br> 38) Input Action dengan klik tanda panah ke bawah lalu pilih “drop”
    <br> 39) Klik <strong>Apply</strong> lalu <strong>OK</strong>
    <br> 40) Ubah urutan filter rules drop dari posisi 2 ke posisi 0 
    `
    //9
  },
  {
    id: 19,
    text: "Yang manakah tampilan yang benar? 3",
    imageOptions: [
      { id: 0, image: ImgQuis6True , isCorrect: true },
      { id: 1, image: ImgQuis6False , isCorrect: false },
    ],
  },
  {
    id: 23,
    judul1: 'Konfigurasi Pencegahan BruteForce',
    image: ImgS10,
    audio: Audio1,
    Desc: `<Strong>Step 4</strong><br><br>
    “Konfigurasi Rule Firewall untuk
    mencegah serangan pada server ssh di
    Router ini”<br>
    <br> 41) Klik untuk mebuat New Firewall Rule
    <br> 42) Klik menu <Strong>General</Strong>
    <br> 43) Input Chain dengan klik tanda panah ke bawah lalu pilih “input”
    <br> 44) Input Protocol dengan “6(tcp)”
    <br> 45) Input Dst. Port “22” 
    `
    //10
  },
  {
    id: 24,
    judul1: 'Konfigurasi Pencegahan BruteForce',
    image: ImgS11,
    audio: Audio1,
    Desc: `<br> 46) Input connection ceklis “new”
    <br> 47) Klik menu <Strong>Extra</Strong>
    <br> 48) Klik tanda panah ke atas pada Dst.Limit
    <br> 49) Input Rate 1/min
    <br> 50) Input Burst “2”
    <br> 51) Klik tanda panah ke bawah pada Limit By lalu pilih “src.and dst. addresses”
    <br> 52) Klik menu <Strong>Action</Strong>
    <br> 53) Input Action “accept”
    <br> 54) Klik <strong>Apply</strong> lalu <strong>OK</strong>
    `
    //11
  },
  {
    id: 25,
    text: "Yang manakah tampilan yang benar? 4",
    imageOptions: [
      { id: 0, image: ImgQuis7True , isCorrect: true },
      { id: 1, image: ImgQuis8True , isCorrect: false },
    ],
  },
  {
    id: 26,
    judul1: 'Konfigurasi Pencegahan BruteForce',
    image: ImgS12,
    audio: Audio1,
    Desc: ` <Strong>Step 5 </strong><br><br>
      “Konfigurasi ini digunakan untuk menangkap IP address yang gagal login ssh lebih dari 3x <br> dan akan dianggap blacklist sesuai waktu yang ditentukan dan memanggil port ssh”<br>
      <br> 55) Klik + untuk mebuat New Firewall Rule
      <br> 56) Klik menu <Strong> General </Strong>
      <br> 57) Input Chain dengan klik tanda panah ke bawah lalu pilih “input”
      <br> 58) Input Protocol dengan “6(tcp)”
      <br> 59) Input Dst. Port “22”
      `
      //12
  },
  {
    id: 27,
    judul1: 'Konfigurasi Pencegahan BruteForce',
    image: ImgS13,
    audio: Audio1,
    Desc: `<br> 60) Klik menu <Strong>Action</Strong>
    <br> 61) Input Action dengan klik tanda panah ke bawah lalu pilih “add dst to address list”
    <br> 62) Input Address List dengan “blacklist”
    <br> 63) Input Timeout dengan “10d 00:00:00”
    <br> 64) Klik <Strong>Apply</Strong> lalu klik <Strong>OK</Strong>
    <br>IP gagal login akan dimasukkan kedalam Address list dan diblacklist selama 10 hari.
    <br> 65) Buka firewall rules drop
    <br> 66) Tambahkan input pada Dst. Port “22”
    <br> 67) Klik <strong>Apply</strong> lalu <strong>OK</strong>`
  }
,
  {
    id: 25,
    text: "Yang manakah tampilan yang benar? 5",
    imageOptions: [
      { id: 0, image: ImgQuis9True , isCorrect: true },
      { id: 1, image: ImgQuis9False , isCorrect: false },
    ],
  },
  {
    judul1: 'Pengujian',
    image: ImgS14,
    audio: Audio1,
    Desc: ` <Strong>Step 1 </strong><br><br>
        “Langkah ini dilakukan untuk
        menguji apakah konfigurasi yang
        telah dilakukan bisa mengatasi
        serangan brute force pada telnet dan
        ssh di MikroTIK”<br>
        <br>1) Buka Aplikasi Command Prompt
        pada PC. Klik windows search
        pada taskbar lalu ketikan
        keyword “com”
        <br> 2) Ketik “ncrack 192.168.10.1:23”
        pada command promt
        IP yang digunakan sesuai dengan
        input pada konfigurasi antarmuka
        diawal. <br>   Lalu port 23 digunakan untuk
        pengujian pada protocol jaringan
        telnet.
        <br> 3) Klik enter pada keyboard tunggu
        sampai proses pengujian selesai
        <br> 4) Buka Kembali Winbox
        <br> 5) Klik menu IP Firewall
        <br> 6) Klik menu Address Lists
        <br> 7) Pastikan IP pada pengujian tadi
        masuk kedalam address list
        blacklist.
        <br> 8) Jika IP sudah masuk kedalam
        address blacklist maka
        konfigurasi pencegahan serangan
        bruteforce pada protocol jaringan
        telnet dinyatakan berhasil.
      `
      //14
  },
  {
    id: 25,
    text: "Yang manakah tampilan yang benar?",
    imageOptions: [
      { id: 0, image: ImgQuis10True , isCorrect: true },
      { id: 1, image: ImgQuis10False , isCorrect: false },
    ],
  },
  {
    judul1: 'Pengujian',
    image: ImgS15,
    audio: Audio1,
    Desc: ` <Strong>Step 2 </strong><br><br>
        “Langkah ini untuk melakukan
        pengujian konfigurasi pada protocol
        jaringan ssh”<br>
        <br> 9) Klik menu IP kemudian Firewall
        <br> 10) Klik menu Address Lists
        <br> 11) Klik hasil pengujian protocol jaringan telnet
        <br> 12) Klik icon -
        <br> 13) Klik menu filter rules
        <br> 14) Klik “Reset All Counters”
        <br> 15) Buka Aplikasi Command Prompt
        pada PC. Klik windows search
        pada taskbar lalu ketikan
        keyword “com”
        <br> 16) Ketik “ncrack 192.168.10.1:22”
        pada command promt
        IP yang digunakan sesuai dengan
        input pada konfigurasi antarmuka
        diawal.
        <br> Lalu port 22 digunakan untuk
        pengujian pada protocol jaringan ssh.
        <br> 17) Klik <Strong>enter</Strong> pada keyboard tunggu
        sampai proses pengujian selesai
        <br> 18) Buka Kembali Winbox
        <br> 19) Klik menu IP kemudian Firewall
        <br> 20) Klik menu Address Lists
        <br> 21) Pastikan IP pada pengujian tadi
        masuk kedalam address list
        blacklist.
        <br> 22) Jika IP sudah masuk kedalam
        address blacklist maka
        konfigurasi pencegahan serangan
        bruteforce pada protocol jaringan
        ssh dinyatakan berhasil
        `
        //15
    },
    {
      id: 25,
      text: "Yang manakah tampilan yang benar?",
      imageOptions: [
        { id: 0, image: ImgQuis11True , isCorrect: true },
        { id: 1, image: ImgQuis11False , isCorrect: false },
      ],
    },
    {
      judul1: 'Langkah Kerja Penutup',
      image: ImgG,
      audio: Audio1,
      Desc: `
      1. Tutup semua aplikasi kemudian matikan PC seusai
      prosedur!
      <br> 2. Pastikan kabel power peralatan jaringan tidak
      terhubung dengan sumber daya!
      <br> 3. Simpan kembali alat yang telah digunakan ke
      tempatnya dengan rapih!
      <br> 4. Berdo’a setelah kegiatan selesai
        `
    }

];

export default slides;