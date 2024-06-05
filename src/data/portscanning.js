import Audio1 from "../assets/audio/audio1.mp3";
import Img1 from "../assets/img/PortScanning/4.precheck.gif";
import Img2 from "../assets/img/PortScanning/5.addaddress 1compres.gif";
import Img3 from "../assets/img/PortScanning/6.addaddress 2compress.gif";
import Img4 from "../assets/img/PortScanning/7.ruledropcompress.gif";
import Img5 from "../assets/img/PortScanning/8.testing.gif";
import ImgG from "../assets/img/jobsheet1/imgf15.gif";
import Quiz1A from "../assets/img/PortScanning/1.CommandBenar.jpg"
import Quiz1 from "../assets/img/PortScanning/1.CommandSalah.jpg"
import Quiz2A from "../assets/img/PortScanning/2.AddAddressBenar.jpg"
import Quiz2 from "../assets/img/PortScanning/2.AddAddressSalah.jpg"
import Quiz3A from "../assets/img/PortScanning/3.ActionBenar.jpg"
import Quiz3 from "../assets/img/PortScanning/3.ActionSalah.jpg"
import Quiz4A from "../assets/img/PortScanning/4.InputSrc.AddressListBenar.jpg"
import Quiz4 from "../assets/img/PortScanning/4.InputSrc.AddressListSalah.jpg"
import Quiz5A from "../assets/img/PortScanning/5.PengujianBenar.jpg"
import Quiz5 from "../assets/img/PortScanning/5.PengujianSalah.jpg"

const slidesportscanning = [
  {
    id: 1,
    judul1: 'Konfigurasi Pencegahan Port Scanning',
    image: Img1,
    audio: Audio1,
    Desc: `<br> “Konfigurasi ini dilakukan untuk
    mengecek port mana yang rentan di
    serang oleh peretas” <br><br>
    1) Klik windows search pada taskbar lalu ketik kata kunci <Strong>“com”</Strong>. Buka aplikasi Command Prompt pada PC.
    <br> 2) Ketik “nmap –top-port 10 192.168.10.1”, Klik enter tunggu sampai proses selesai.
    <br> 3) Port yang memiliki STATE open menjadi port yang rentan diserang oleh peretas.
    <br> Maka untuk meminimalisir terjadi serangan kepada port tersebut perlu adanya konfigurasi untuk menutup port tersebut.
    `
  },
  {
    id: 8,
    text: "Yang manakah tampilan yang benar?",
    imageOptions: [
      { id: 0, image: Quiz1 , isCorrect: false },
      { id: 1, image: Quiz1A , isCorrect: true },
    ],
  },
  {
    id: 2,
    judul1: 'Konfigurasi Pencegahan Port Scanning',
    image: Img2,
    audio: Audio,
    Desc: `<br>“Konfigurasi ini dilakukan agar rule
    membaca trafik dari port scanner<br>dan
    memberikan nilai dari port yang discan sesuai dengan nilai <Strong>Low Port</Strong>
    dan <Strong>High Port Weight</Strong> ” <br><br>
    4) Klik menu IP Pilih Firewall
    <br> 5) Klik untuk membuat New Firewall Rule
    <br> 6) Klik General pada sub menu New Firewall Rule
    <br> 7) Input Chain dengan klik icon lalu pilih “input”
    <br> 8) Input Protocol dengan “6(tcp)”
    <br> 9) Klik Extra pada sub menu New Firewall Rule
    <br> 10) Klik icon pada PSD
    <br> 11) Input Weight Threshold pada PSD dengan “3”
    <br> 12) Input Delay Thershold “00:00:03”
    <br> 13) Input Low Port Weight pada PSD Weight dengan “2”
    <br> 14) Input High Port Weight pada PSD dengan “2”
    `
  },
  {
    id: 8,
    text: "Yang manakah tampilan yang benar?",
    imageOptions: [
      { id: 0, image: Quiz2 , isCorrect: false },
      { id: 1, image: Quiz2A , isCorrect: true },
    ],
  },
  {
    id: 3,
    judul1: 'Konfigurasi Pencegahan Port Scanning',
    image: Img3,
    audio: Audio,
    Desc: `<br>“Konfigurasi ini dilakukan untuk mencegah terjadi serangan pada jaringan komputer (Port Scanning)” <br><br>
    4) Klik menu IP Pilih Firewall
    <br> 15) Klik Action pada sub menu New Firewall Rule
    <br> 16) Input Action dengan klik icon
    Lalu pilih “add src to address list”
    <br> 17) Input Address List dengan “portscanner”
    <br> 18) Input Timeout “10d:00:00:00”
    <br> 19) Klik <strong>Apply</strong> lalu <strong>OK</strong>
    <br> 10) Kemudian anda akan diarahkan Kembali kepada dashboard Filter Rules
    `
  },
  {
    id: 8,
    text: "Yang manakah tampilan yang benar?",
    imageOptions: [
      { id: 0, image: Quiz3A , isCorrect: true },
      { id: 1, image: Quiz3 , isCorrect: false },
    ],
  },
  {
    id: 4,
    judul1: 'Konfigurasi Pencegahan Port Scanning',
    image: Img4,
    audio: Audio,
    Desc: `<br>“Konfigurasi ini dilakukan untuk melakukan drop terhadap port yang akan kita amankan dari serangan port scanning”<br><br>
    21) Klik + untuk membuat New Firewall Rule
    <br> 22) Klik General pada sub menu New Firewall Rule
    <br> 23) Input Chain dengan klik icon lalu pilih “input”
    <br> 24) Input Protocol dengan “6(tcp)”
    <br> 25) Klik Advanced pada sub menu New Firewall Rule
    <br> 26) Input Src. Address List dengan klik icon lalu pilih “protscanner”
    <br> 27) Klik Action pada sub menu New Firewall Rule
    <br> 28) Input Action dengan klik icon lalu pilih “drop”
    <br> 29) Klik <strong>Apply</strong> lalu <strong>OK</strong>
    `
  },
  {
    id: 8,
    text: "Yang manakah tampilan yang benar?",
    imageOptions: [
      { id: 0, image: Quiz4A , isCorrect: true },
      { id: 1, image: Quiz4 , isCorrect: false },
    ],
  },
  {
    id: 5,
    judul1: 'Konfigurasi Pencegahan Port Scanning',
    image: Img5,
    audio: Audio,
    Desc: `<br>“Konfigurasi ini dilakukan untuk mengetahui apakah port yang masih terbuka sudah berhasil dengan konfigurasi pencegahan port scanning”<br><br>
    <br> 1) Klik windows search pada
    taskbar lalu ketik kata kunci
    “com”. Buka aplikasi Command
    Prompt pada PC.
    <br> 2) Ketik “nmap –top-port 10
    192.168.10.1”, Klik enter tunggu
    sampai proses selesai.
    <br> 3) Setelah konfigurasi selesai
    semua port akan memilik STATE
    “filtered”
    <br> 4) Jika IP sudah masuk kedalam
    address list maka konfigurasi
    pencegahan serangan port scan
    pada protocol jaringan ssh
    dinyatakan berhasil
    `
  },
  {
    id: 8,
    text: "Yang manakah tampilan yang benar?",
    imageOptions: [
      { id: 0, image: Quiz5A , isCorrect: true },
      { id: 1, image: Quiz5 , isCorrect: false },
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


export default slidesportscanning;