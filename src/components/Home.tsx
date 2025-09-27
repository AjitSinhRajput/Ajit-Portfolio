import { useEffect } from "react";
import Typed from "typed.js";

const Home: React.FC = () => {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Software Developer", "Quick Learner", "Trainee"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy(); // cleanup when component unmounts
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3 className="">Hello, It's Me</h3>
        <h1 className="">Ajit Sinh Rajput</h1>
        <h3 className="">
          And I'm a <span className="multiple-text"></span>
        </h3>
        <p className="no-cursor-effect">
          This is my website so you can learn a little more about me. I'm highly
          motivated, committed, and dedicated to establishing a career in the IT
          industry.
        </p>
        <div className="social-media ">
          <a
            href="https://www.linkedin.com/in/ajit-sinh-rajput-7961b5233/"
            className="no-cursor-effect"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/the.wizard.dan/"
            className="no-cursor-effect"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a
            href="mailto:asrrajput123ajit@gmail.com"
            className="no-cursor-effect"
          >
            <i className="bx bx-envelope"></i>
          </a>
          <a
            href="https://github.com/AjitSinhRajput"
            className="no-cursor-effect"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <a href="Ajit-Resume.pdf" className="btn no-cursor-effect" download>
          Download CV
        </a>
      </div>

      <div className="home-img-hex no-cursor-effect">
        <img src="images/ajit.jpeg" alt="Ajit Sinh Rajput" />
      </div>
    </section>
  );
};

export default Home;
