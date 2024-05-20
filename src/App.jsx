import Aos from "aos"
import Enquiry from "./Pages/Enquiry"
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from "./Pages/Home";
import SecondaryNav from "./Components/SecondaryNav";
import PrimaryNav from "./Components/PrimaryNav";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import MessageFromMd from "./Pages/MessageFromMd";
import AboutConsultancy from "./Components/AboutConsultancy";
import Gallery from "./Pages/Gallery";
import Country from "./Pages/Country";
import Courses from "./Pages/Courses";
Aos.init();
function App() {
  return (
    <>
    <BrowserRouter>
    <SecondaryNav/>
    <PrimaryNav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/enquiry" element={<Enquiry/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/message-from-md" element={<MessageFromMd/>}/>
      <Route path="/about-consultancy" element={<AboutConsultancy/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/country" element={<Country/>}/>
      <Route path="/courses" element={<Courses/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
