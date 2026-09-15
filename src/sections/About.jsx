import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, UserRound } from "lucide-react";
import { aboutParagraphs, aboutStats } from "../data/portfolioData";
import Reveal from "../components/Reveal";
import {
  staggerContainer,
  scaleIn,
  viewportOnce,
} from "../utils/motionVariants";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about__ambient about__ambient--one" />
      <div className="about__ambient about__ambient--two" />

      <div className="container">
        <div className="about__grid">

          {/* LEFT CONTENT */}
          <div className="about__copy">

            <Reveal as="div" className="section-kicker">
              About
            </Reveal>

            <Reveal
              as="h2"
              className="section-title"
              delay={0.05}
            >
              A fresher who builds like it matters
            </Reveal>

            <div className="about__intro">
              <span className="about__intro-line" />
              <span>
                Building with curiosity, consistency and a
                product-first mindset.
              </span>
            </div>

            <div className="about__paragraphs">
              {aboutParagraphs.map((paragraph, index) => (
                <Reveal
                  as="p"
                  key={paragraph.slice(0, 12)}
                  className="about__paragraph"
                  delay={0.1 + index * 0.08}
                >
                  {paragraph}
                </Reveal>
              ))}
            </div>

            {/* Small signature card */}
            <Reveal
              as="div"
              className="about__signature"
              delay={0.25}
            >
              <div className="about__signature-icon">
                <UserRound size={17} />
              </div>

              <div className="about__signature-content">
                <span className="about__signature-label">
                  CURRENT FOCUS
                </span>

                <strong>
                  Java Full Stack Development
                </strong>
              </div>

              <ArrowUpRight
                className="about__signature-arrow"
                size={17}
              />
            </Reveal>
          </div>

          {/* RIGHT STATS */}
          <motion.div
            className="about__stats"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1, 0.08)}
          >
            {/* Stats header */}
            <div className="about__stats-header">
              <div className="about__stats-heading">
                <Sparkles size={14} />
                <span>QUICK SNAPSHOT</span>
              </div>

              <span className="about__stats-status">
                2026
              </span>
            </div>

            <div className="about__stats-grid">
              {aboutStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="about__stat glass"
                  variants={scaleIn}
                  whileHover={{
                    y: -7,
                    scale: 1.015,
                  }}
                >
                  <div className="about__stat-top">
                    <span className="about__stat-index">
                      0{index + 1}
                    </span>

                    <ArrowUpRight
                      className="about__stat-arrow"
                      size={15}
                    />
                  </div>

                  <span className="about__stat-value gradient-text">
                    {stat.value}
                  </span>

                  <span className="about__stat-label">
                    {stat.label}
                  </span>

                  <div className="about__stat-line">
                    <span />
                  </div>

                  <span className="about__stat-corner" />
                </motion.div>
              ))}
            </div>

            {/* Decorative quote / card */}
            <motion.div
              className="about__philosophy"
              variants={scaleIn}
            >
              <div className="about__philosophy-glow" />

              <span className="about__philosophy-mark">
                “
              </span>

              <p>
                Learn deeply. Build consistently.
                Keep improving.
              </p>

              <span className="about__philosophy-line" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}