import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Index";
import Header from "../components/Header";
import Projects from "./Projects";
import Footer from "../components/Footer";
import NotFound from "./404";
import Skills from "./Skills";
import Reading from "./Reading";
import Contact from "./Contact";

function App() {
  return (
    <div className="px-[5vw] md:px-[15vw] xl:px-[20vw]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/contact" element={<Index />} />
          <Route path="/blog" element={<Index />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
