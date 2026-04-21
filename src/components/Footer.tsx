import { useEffect, useState } from "react";

function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if user scrolls more than 200px
      setShowTopButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>
          Copyright &copy; {new Date().getFullYear()} Ajit Sinh Rajput. All
          rights reserved.
        </p>
      </div>

      <div className="footer-iconTop">
        <button
          onClick={scrollToTop}
          style={{
            display: showTopButton ? "flex" : "none",
          }}
          aria-label="Back to top"
        >
          <i className="bx bx-up-arrow-alt"></i>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
