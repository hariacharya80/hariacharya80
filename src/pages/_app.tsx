import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Index";
import Header from "../components/Header";
import Projects from "./Projects";
import Certification from "./Certification";
import Footer from "../components/Footer";

function App() {
  const [activeMenu, setActiveMenu] = useState<string>("Intro");

  return (
    <div className="px-[5vw] md:px-[15vw] xl:px-[20vw]">
      <BrowserRouter>
        <Header currentMenu={activeMenu} setMenu={setActiveMenu} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stack" element={<Index />} />
          <Route path="/reading" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          <Route path="/blog" element={<Index />} />
          <Route path="/certification" element={<Certification />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
