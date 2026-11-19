import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolioData";
import useActiveSection from "../hooks/useActiveSection";
import { scrollToSection } from "../utils/scroll";
import "./Navbar.css";

const SECTION_IDS = navLinks.map((link) => link.id);

const DESKTOP_LINKS = navLinks.filter((link) =>
  ["about", "skills", "projects", "contact"].includes(link.id)
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
  }, []);

  useEffect(() => {
    let previousY = window.scrollY;

    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
      previousY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <nav className="navbar__shell container" aria-label="Primary">
          <button
            type="button"
            className="navbar__brand"
            onClick={() => handleNavClick("home")}
            aria-label="Go to home"
          >
            <span className="navbar__avatar-wrap">
              <img
                src="/prince-raghav.jpg"
                alt=""
                className="navbar__avatar"
                width={38}
                height={38}
              />
            </span>
            <span className="navbar__brand-text">
              <strong>{profile.name}</strong>
              <span>Java Full Stack Developer</span>
            </span>
          </button>

          <ul className="navbar__pills">
            {DESKTOP_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={`navbar__pill ${
                    activeId === link.id ? "is-active" : ""
                  }`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="navbar__cta"
            onClick={() => handleNavClick("contact")}
          >
            <span className="navbar__cta-icon" aria-hidden="true">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
            Start a Project
          </button>

          <button
            type="button"
            className="navbar__burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="mobile-menu glass" id="mobile-navigation">
          <ul className="mobile-menu__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={`mobile-menu__link ${
                    activeId === link.id ? "is-active" : ""
                  }`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn-primary mobile-menu__cta"
            onClick={() => handleNavClick("contact")}
          >
            Start a Project
          </button>
        </div>
      )}
    </>
  );
}