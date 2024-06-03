import Aos from "aos"
import Enquiry from "./Pages/Enquiry"
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from "./Pages/Home";
import PrimaryNav from "./Components/PrimaryNav";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import MessageFromMd from "./Pages/MessageFromMd";
import Gallery from "./Pages/Gallery";
import Courses from "./Pages/Courses";
import Abroad from "./Components/Abroad";
import IeltsPreparation from "./Pages/IeltsPreparation";
import Migration from "./Pages/Migration";
import AdmissionGuidance from "./Pages/AdmissionGuidance";
import CareerCounceling from "./Pages/CareerCounceling";
import About from "./Pages/About";
Aos.init();
function App() {
  return (
    <>
    <BrowserRouter>
    <PrimaryNav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/enquiry" element={<Enquiry/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/message-from-md" element={<MessageFromMd/>}/>
      <Route path="/about-consultancy" element={<About/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/country" element={<Abroad/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/abroad" element={<Abroad/>}/>
      <Route path="/ielts" element={<IeltsPreparation/>}/>
      <Route path="/migration" element={<Migration/>}/>
      <Route path="/admission" element={<AdmissionGuidance/>}/>
      <Route path="/career" element={<CareerCounceling/>}/>


    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
