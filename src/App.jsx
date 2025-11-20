import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Acti from "./pages/Acti";
import Project from "./pages/Project";

function Layout() {
  return (
    <>
      <Navbar />        {/* Navbar คงอยู่ */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/activities" element={<Acti />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
