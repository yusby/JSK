import {Routes, Route} from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

import HomePage from "./pages/HomePage"
import KelasPage from "./pages/KelasPage"
import FeedBackPage from "./pages/FeedBackPage"
import FaqPage from "./pages/FaqPage"
import SkPage from "./pages/SkPage"


function App() {
  return <div>
    <NavbarComponent/>
    <Routes>
      <Route path="/"Component={HomePage}/>
      <Route path="/kelas"Component={KelasPage}/>
      <Route path="/feedback"Component={FeedBackPage}/>
      <Route path="/faq"Component={FaqPage}/>
      <Route path="/sk"Component={SkPage}/>
    </Routes>
    <FooterComponent/>
  </div>
}

export default App
