import { useEffect, useState } from "react";

import { navLinks, profile } from "../../constants";
import "./Navbar.scss";

const Navbar = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}
      aria-label="Primary navigation"
    >
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span className="brand-mark">SN</span>
        <span>{profile.name}</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="main-menu"
        onClick={() => setOpen(!open)}
      >
        <span>{open ? "Close" : "Menu"}</span>
      </button>
      <button
        className="theme-toggle theme-toggle-desktop"
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
        <small>{theme === "dark" ? "Light" : "Dark"}</small>
      </button>
      <div id="main-menu" className={`nav-menu ${open ? "nav-menu-open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
            {link.title}
          </a>
        ))}
        <span className="nav-resume resume-placeholder">
          Resume <small>{profile.resume}</small>
        </span>
        <button
          className="theme-toggle theme-toggle-mobile"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          <small>{theme === "dark" ? "Light" : "Dark"}</small>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
