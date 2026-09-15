import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { navLinks } from "../data/portfolioData";
import useActiveSection from "../hooks/useActiveSection";
import { scrollToSection } from "../utils/scroll";
import "./Navbar.css";

const SECTION_IDS = navLinks.map((link) => link.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      <motion.header
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <nav className="navbar__inner container" aria-label="Primary">

          {/* LOGO */}
          <motion.button
            className="navbar__logo"
            onClick={() => handleNavClick("home")}
            aria-label="Go to home section"
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="navbar__logo-orbit">
              <span className="navbar__logo-mark">
                PR
              </span>
            </span>

            <span className="navbar__logo-content">
              <span className="navbar__logo-name">
                Prince Raghav
              </span>

              <span className="navbar__logo-sub">
                JAVA FULL STACK
              </span>
            </span>
          </motion.button>

          {/* DESKTOP NAV */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <motion.button
                  className={`navbar__link ${activeId === link.id ? "is-active" : ""
                    }`}
                  onClick={() => handleNavClick(link.id)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span>{link.label}</span>

                  {activeId === link.id && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="navbar__indicator"
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  )}
                </motion.button>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="navbar__right">

            <div className="navbar__availability">
              <span className="navbar__status-dot" />
              <span>Available</span>
            </div>

            <motion.button
              className="navbar__cta"
              onClick={() => handleNavClick("contact")}
              whileHover={{
                y: -2,
                scale: 1.025,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Sparkles size={14} />
              <span>Let's connect</span>
              <ArrowUpRight size={15} />
            </motion.button>

            <motion.button
              className="navbar__burger"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* TOP LIGHT LINE */}
        <motion.div
          className="navbar__light-line"
          animate={{
            opacity: scrolled ? 0.8 : 0.45,
          }}
        />
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu__glow mobile-menu__glow--one" />
            <div className="mobile-menu__glow mobile-menu__glow--two" />

            <motion.div
              className="mobile-menu__content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                duration: 0.4,
                delay: 0.05,
              }}
            >
              <div className="mobile-menu__top">
                <span className="mobile-menu__eyebrow">
                  NAVIGATION
                </span>

                <span className="mobile-menu__availability">
                  <span className="navbar__status-dot" />
                  Available for opportunities
                </span>
              </div>

              <motion.ul
                className="mobile-menu__list"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.12,
                    },
                  },
                }}
              >
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -25,
                      },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    <button
                      className={`mobile-menu__link ${activeId === link.id ? "is-active" : ""
                        }`}
                      onClick={() =>
                        handleNavClick(link.id)
                      }
                    >
                      <span className="mobile-menu__number">
                        0{index + 1}
                      </span>

                      <span>{link.label}</span>

                      <ArrowUpRight
                        className="mobile-menu__arrow"
                        size={20}
                      />
                    </button>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="mobile-menu__footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span>Prince Raghav</span>
                <span>Java Full Stack Developer</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}