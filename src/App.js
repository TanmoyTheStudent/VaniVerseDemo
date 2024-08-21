import { Route,Routes,useNavigate } from "react-router-dom";

//importing components
import Header from "./components/header-footer/Header";
import Footer from "./components/header-footer/Footer";
import Home from "./components/home/Home";
import Services from "./components/home/Services";
import Participate from "./components/home/Participate";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/home/ContactUs";
import Login from "./components/user-authentication/Login";
import Registration from "./components/user-authentication/Registration";
import STT from "./components/services/STT";
import TTS from "./components/services/TTS";
import TTT from "./components/services/TTT";
import TermsOfUse from "./components/header-footer/TermsOfUse";
import PrivacyPolicy from "./components/header-footer/PrivacyPolicy";
import MessageForm from "./components/home/MessageForm";

function App() {
  return (
    <div >
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<Services/>} />
        <Route path="/our-services/speech-to-text" element={<STT/>}/>
        <Route path="/our-services/text-to-speech" element={<TTS/>}/>
        <Route path="/our-services/text-to-text" element={<TTT/>}/>
        <Route path="/participate&earn" element={<Participate/>} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register-yourself" element={<Registration/>}/>
        <Route path="/terms-of-use" element={<TermsOfUse/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/message-us" element={<MessageForm/>}/>
        
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
