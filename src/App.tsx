import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

// import your components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./utils/Cursor";

const App: React.FC = () => {
  useEffect(() => {
    // Initialize ScrollReveal once when app loads
    const sr = ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    sr.reveal(".home-content, .heading", { origin: "top" });
    sr.reveal(
      ".home-img, .service-container, .ajit-portfolio-box, .contact form",
      {
        origin: "bottom",
      }
    );
    sr.reveal(".home-content h1, .about-img", { origin: "left" });
    sr.reveal(".home-content p, .about-content", { origin: "right" });
  }, []);

  return (
    <>
      <Cursor />
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
