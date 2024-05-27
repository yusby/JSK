import {Routes, Route} from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"
import HomePage from "./pages/HomePage"
import KelasPage from "./pages/KelasPage"
import FeedBackPage from "./pages/FeedBackPage"
import FaqPage from "./pages/FaqPage"
import SkPage from "./pages/SkPage"
import KeamananJaringan from "./pages/keamananjaringanPage"
import Jobsheet2 from "./pages/Jobsheet2"

function App() {
  return <div>
    <NavbarComponent/>
    <Routes>
      <Route path="/"Component={HomePage}/>
      <Route path="/kelas"Component={KelasPage}/>
      <Route path="/feedback"Component={FeedBackPage}/>
      <Route path="/faq"Component={FaqPage}/>
      <Route path="/sk"Component={SkPage}/>
      <Route path="/keamananjaringan"Component={KeamananJaringan}/>
      <Route path="/jobsheet2"Component={Jobsheet2}/>
    </Routes>
    <FooterComponent/>
  </div>
}

export default App