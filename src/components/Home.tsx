import { useEffect } from "react";
import Typed from "typed.js";
import { assetPath } from "../utils/assets";

const Home: React.FC = () => {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: [
        "Full-Stack Software Engineer",
        "Power Platform Developer",
        "SaaS and AI Integrations",
      ],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 1400,
      contentType: "null",
      loop: true,
    });

    return () => {
      typed.destroy(); // cleanup when component unmounts
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="hero-shell">
        <div className="hero-shell-top">
          <span></span>
          <span></span>
          <span></span>
          <strong>ajit-portfolio / command-center</strong>
        </div>

        <div className="home-content">
          <p className="section-kicker">London, Ontario based</p>
          <h1>Ajit Sinh Rajput</h1>
          <h3>
            <span className="multiple-text"></span>
          </h3>
          <p className="hero-subtitle">
            I build secure product systems across full-stack, cloud, AI, and
            Microsoft business platforms.
          </p>
          <div className="hero-signals">
            <span>React + FastAPI</span>
            <span>AWS + PostgreSQL</span>
            <span>Power Platform</span>
            <span>OAuth + RBAC</span>
          </div>
          <div className="hero-actions">
            <a href="#portfolio" className="btn">
              View Projects
            </a>
            <a
              href={assetPath("AjitResume.pdf")}
              download="Ajit_Sinh_Rajput_Resume.pdf"
              className="btn btn-secondary"
            >
              Download Resume
            </a>
          </div>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/ajit-sinh-rajput-7961b5233/"
              aria-label="LinkedIn profile"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="mailto:asrrajput123ajit@gmail.com" aria-label="Email Ajit">
              <i className="bx bx-envelope"></i>
            </a>
            <a
              href="https://github.com/AjitSinhRajput"
              aria-label="GitHub profile"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>3 yrs</strong>
              <span>Professional experience</span>
            </div>
            <div>
              <strong>500+</strong>
              <span>CRM users supported</span>
            </div>
            <div>
              <strong>30%</strong>
              <span>Ops effort reduced</span>
            </div>
          </div>
        </div>

        <div className="home-visual">
          <div className="code-terminal" aria-label="Developer profile snippet">
            <div className="terminal-top">
              <div className="terminal-controls" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <strong>system-design.yaml</strong>
              <small>software-engineering</small>
            </div>
            <div className="terminal-body">
              <span className="line-number">01</span>
              <code>
                <span className="code-key">engineer</span>:
              </code>
              <span className="line-number">02</span>
              <code>
                {"  "}role:{" "}
                <span className="code-string">full-stack software engineer</span>
              </code>
              <span className="line-number">03</span>
              <code>
                {"  "}systems:{" "}
                <span className="code-muted">[</span>
                <span className="code-string">saas</span>,{" "}
                <span className="code-string">crm</span>,{" "}
                <span className="code-string">healthcare</span>
                <span className="code-muted">]</span>
              </code>
              <span className="line-number">04</span>
              <code>
                {"  "}architecture:{" "}
                <span className="code-muted">[</span>
                <span className="code-string">frontend</span>,{" "}
                <span className="code-string">api</span>,{" "}
                <span className="code-string">data</span>,{" "}
                <span className="code-string">automation</span>
                <span className="code-muted">]</span>
              </code>
              <span className="line-number">05</span>
              <code>
                {"  "}quality:{" "}
                <span className="code-muted">[</span>
                <span className="code-string">secure</span>,{" "}
                <span className="code-string">observable</span>,{" "}
                <span className="code-string">maintainable</span>
                <span className="code-muted">]</span>
              </code>
              <span className="line-number">06</span>
              <code>
                {"  "}delivery:{" "}
                <span className="code-muted">[</span>
                <span className="code-string">cloud</span>,{" "}
                <span className="code-string">ci_cd</span>,{" "}
                <span className="code-string">production</span>
                <span className="code-muted">]</span>
              </code>
            </div>
            <div className="terminal-status">
              <span>main</span>
              <span>ready</span>
              <span>ship_quality: true</span>
            </div>
          </div>
          <div className="hero-availability">
            <i className="bx bx-map"></i>
            <span>Canada | Remote and hybrid-ready</span>
          </div>
          <div className="hero-architecture">
            <span>frontend</span>
            <i className="bx bx-right-arrow-alt"></i>
            <span>api</span>
            <i className="bx bx-right-arrow-alt"></i>
            <span>data</span>
            <i className="bx bx-right-arrow-alt"></i>
            <span>automation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
