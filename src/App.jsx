import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Acti from "./pages/Acti";
import Project from "./pages/Project";
import Galaxy from "./pages/Galaxy";

// สร้าง component wrapper สำหรับ fade in/out
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar /> {/* Navbar คงอยู่ */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Hero />
                <About />
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="/activities"
            element={
              <PageWrapper>
                <Acti />
              </PageWrapper>
            }
          />
          <Route
            path="/projects"
            element={
              <PageWrapper>
                <Project />
              </PageWrapper>
            }
          />
          <Route
            path="/galaxy"
            element={
              <PageWrapper>
                <Galaxy />
              </PageWrapper>
            }
          />
        </Routes>
        
      </AnimatePresence>
      <Footer />
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
