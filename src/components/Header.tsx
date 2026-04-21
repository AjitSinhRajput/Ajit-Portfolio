import { useEffect, useState } from "react";
import { Switch } from "antd";
import { SunFilled, MoonFilled } from "@ant-design/icons";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Skills" },
  { id: "portfolio", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    let ticking = false;

    const updateHeaderState = () => {
      const nextSticky = window.scrollY > 80;
      setIsSticky((current) => (current === nextSticky ? current : nextSticky));

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => Boolean(section));
      const activationLine = window.innerHeight * 0.38;

      const active =
        sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= activationLine && rect.bottom > activationLine;
        }) ||
        sections.reduce<HTMLElement | null>((closest, section) => {
          const rect = section.getBoundingClientRect();
          if (!closest) return section;

          const closestDistance = Math.abs(
            closest.getBoundingClientRect().top - activationLine
          );
          const sectionDistance = Math.abs(rect.top - activationLine);

          return sectionDistance < closestDistance ? section : closest;
        }, null);

      const sectionId = active?.id;
      if (sectionId) {
        setActiveSection((current) =>
          current === sectionId ? current : sectionId
        );
      }

      ticking = false;
    };

    const scheduleUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateHeaderState);
    };

    updateHeaderState();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-theme", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <a href="#home" className="logo" onClick={closeMenu}>
        <span className="logo-mark">&lt;</span>Ajit.dev
        <span className="logo-mark">/&gt;</span>
      </a>
      <div className="header-right">
        <button
          type="button"
          className="menu-toggle"
          id="menu-icon"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`}></i>
        </button>
      </div>
      <nav
        className={`navbar ${menuOpen ? "active" : ""}`}
        id="primary-navigation"
      >
        {navItems.map((item) => (
          <a
            href={`#${item.id}`}
            className={activeSection === item.id ? "active" : ""}
            onClick={closeMenu}
            key={item.id}
          >
            {item.label}
          </a>
        ))}
        <div className="theme-switch-container">
          <Switch
            checked={theme === "light"}
            onChange={toggleTheme}
            checkedChildren={<SunFilled />}
            unCheckedChildren={<MoonFilled />}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
