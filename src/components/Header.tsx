import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement)?.offsetTop - 150;
        const sectionHeight = (section as HTMLElement)?.offsetHeight;
        const sectionId = section?.getAttribute("id");

        if (
          scrollY >= sectionTop &&
          scrollY < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });

      setIsSticky(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <a href="#" className="logo no-cursor-effect">
        Portfolio
      </a>

      {/* Menu icon */}
      <i
        className={`bx bx-menu no-cursor-effect ${menuOpen ? "bx-x" : ""}`}
        id="menu-icon"
        onClick={toggleMenu}
      ></i>

      <nav className={`navbar no-cursor-effect ${menuOpen ? "active" : ""}`}>
        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
          onClick={closeMenu}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </a>
        <a
          href="#services"
          className={activeSection === "services" ? "active" : ""}
          onClick={closeMenu}
        >
          Services
        </a>
        <a
          href="#portfolio"
          className={activeSection === "portfolio" ? "active" : ""}
          onClick={closeMenu}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
