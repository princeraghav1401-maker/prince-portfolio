import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

import { heroBadges, profile } from "../data/portfolioData";
import { scrollToSection } from "../utils/scroll";
import { EASE } from "../utils/motionVariants";

import "./Hero.css";

const badgePositions = [
  { top: "2%", left: "60%" },
  { top: "17%", left: "-8%" },
  { top: "40%", left: "88%" },
  { top: "61%", left: "-12%" },
  { top: "78%", left: "64%" },
  { top: "95%", left: "5%" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE,
    },
  },
};

const particles = Array.from({ length: 18 }, (_, i) => ({
  left: `${8 + ((i * 37) % 84)}%`,
  top: `${5 + ((i * 61) % 90)}%`,
  size: 2 + (i % 3),
  delay: (i % 6) * 0.35,
}));

export default function Hero() {
  const visualRef = useRef(null);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth 3D rotation
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [9, -9]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-9, 9]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  // Image parallax
  const imageX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-12, 12]),
    {
      stiffness: 120,
      damping: 18,
    }
  );

  const imageY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-12, 12]),
    {
      stiffness: 120,
      damping: 18,
    }
  );

  const handlePointerMove = (event) => {
    if (!visualRef.current) return;

    const rect = visualRef.current.getBoundingClientRect();

    mouseX.set(
      (event.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (event.clientY - rect.top) / rect.height - 0.5
    );
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="home" className="hero section">
      <div className="container hero__grid">

        {/* ================= CONTENT ================= */}

        <motion.div
          className="hero__content"
          variants={container}
          initial="hidden"
          animate="show"
        >

          {/* Availability */}

          <motion.div
            variants={item}
            className="hero__badge pill"
          >
            <span className="hero__badge-dot" />

            {profile.availability}
          </motion.div>


          {/* Greeting */}

          <motion.p
            variants={item}
            className="hero__greeting"
          >
            Hi, I&rsquo;m Prince Raghav
          </motion.p>


          {/* Main Heading */}

          <motion.h1
            variants={item}
            className="hero__title"
          >
            Java Full Stack
            <br />

            <span className="gradient-text">
              Developer
            </span>
          </motion.h1>


          {/* Description */}

          <motion.p
            variants={item}
            className="hero__subtitle"
          >
            {profile.tagline}
          </motion.p>


          {/* Technologies */}

          <motion.div
            variants={item}
            className="hero__tech-line"
          >
            {[
              "Java",
              "Spring Boot",
              "Hibernate",
              "React.js",
            ].map((tech, i, arr) => (
              <span
                key={tech}
                className="hero__tech-item"
              >
                {tech}

                {i < arr.length - 1 && (
                  <span
                    className="hero__tech-sep"
                    aria-hidden="true"
                  >
                    &bull;
                  </span>
                )}
              </span>
            ))}
          </motion.div>


          {/* Buttons */}

          <motion.div
            variants={item}
            className="hero__actions"
          >

            <button
              className="btn btn-primary"
              onClick={() =>
                scrollToSection("projects")
              }
            >
              View my projects
            </button>


            <a
              className="btn btn-ghost"
              href={profile.resumeFile}
              download
            >
              <Download size={16} />

              Download resume
            </a>


            <button
              className="btn btn-ghost"
              onClick={() =>
                scrollToSection("contact")
              }
            >
              Let&rsquo;s connect
            </button>

          </motion.div>


          {/* Social Links */}

          <motion.div
            variants={item}
            className="hero__socials"
          >

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github size={19} />
            </a>


            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={19} />
            </a>


            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
            >
              <Mail size={19} />
            </a>

          </motion.div>

        </motion.div>


        {/* ================= VISUAL ================= */}

        <motion.div
          ref={visualRef}
          className="hero__visual"

          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}

          initial={{
            opacity: 0,
            scale: 0.88,
            rotate: -4,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}

          transition={{
            duration: 1,
            ease: EASE,
            delay: 0.25,
          }}
        >

          {/* Background Aura */}

          <div className="hero__visual-aura" />


          {/* Stars / Particles */}

          <div className="hero__constellation">

            {particles.map((p, i) => (
              <motion.i
                key={i}

                style={{
                  left: p.left,
                  top: p.top,
                  width: p.size,
                  height: p.size,
                }}

                animate={{
                  opacity: [0.15, 0.9, 0.15],
                  scale: [0.7, 1.35, 0.7],
                }}

                transition={{
                  duration: 2.8 + (i % 4) * 0.5,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut",
                }}
              />
            ))}

          </div>


          {/* 3D Portrait */}

          <motion.div
            className="hero__portrait-stage"

            style={{
              rotateX,
              rotateY,
            }}

            whileHover={{
              scale: 1.035,
            }}

            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
          >

            {/* Orbit 1 */}

            <div className="hero__orbit hero__orbit--one" />

            {/* Orbit 2 */}

            <div className="hero__orbit hero__orbit--two" />

            {/* Orbit 3 */}

            <div className="hero__orbit hero__orbit--three" />


            {/* Image Shell */}

            <motion.div
              className="hero__photo-shell"

              animate={{
                y: [0, -8, 0],
              }}

              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              {/* Scanlines */}

              <div className="hero__scanline" />


              {/* Image */}

              <div className="hero__photo">

                <motion.img
                  src="/prince.jpg"
                  alt="Portrait of Prince Raghav"

                  style={{
                    x: imageX,
                    y: imageY,
                    scale: 1.08,
                  }}

                  onError={(e) => {
                    e.currentTarget.style.display =
                      "none";

                    e.currentTarget.nextElementSibling.style.display =
                      "flex";
                  }}
                />


                {/* Fallback */}

                <div
                  className="hero__photo-fallback"
                  aria-hidden="true"
                >
                  <Sparkles size={40} />

                  <span>
                    PR
                  </span>
                </div>


                {/* Light Sweep */}

                <div className="hero__shine" />

              </div>

            </motion.div>


            {/* Status */}

            <motion.div
              className="hero__status-chip glass"

              animate={{
                y: [0, -5, 0],
              }}

              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <span />

              Available for opportunities

            </motion.div>


            {/* Corner UI */}

            <div className="hero__corner hero__corner--tl" />

            <div className="hero__corner hero__corner--tr" />

            <div className="hero__corner hero__corner--bl" />

            <div className="hero__corner hero__corner--br" />

          </motion.div>


          {/* Floating Tech Badges */}

          {heroBadges.map(
            (badge, index) => (
              <motion.div
                key={badge}

                className="hero__float-badge glass"

                style={badgePositions[index]}

                animate={{
                  y: [0, -10, 0],
                  rotate: [
                    0,
                    index % 2
                      ? -1.5
                      : 1.5,
                    0,
                  ],
                }}

                transition={{
                  duration:
                    4 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}

                whileHover={{
                  scale: 1.12,
                  y: -4,
                }}
              >
                {badge}
              </motion.div>
            )
          )}

        </motion.div>

      </div>


      {/* Scroll */}

      <motion.button
        className="hero__scroll-cue"

        onClick={() =>
          scrollToSection("about")
        }

        aria-label="Scroll to about section"

        animate={{
          y: [0, 8, 0],
        }}

        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ArrowDown size={18} />
      </motion.button>

    </section>
  );
}