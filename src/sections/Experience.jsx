import { motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { training } from "../data/portfolioData";
import Reveal from "../components/Reveal";
import {
  staggerContainer,
  fadeUp,
  viewportOnce,
} from "../utils/motionVariants";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="experience__ambient experience__ambient--one" />
      <div className="experience__ambient experience__ambient--two" />

      <div className="container">
        {/* Heading */}
        <div className="section-head">
          <Reveal as="div" className="section-kicker">
            Experience
          </Reveal>

          <Reveal
            as="h2"
            className="section-title"
            delay={0.05}
          >
            Professional training
          </Reveal>

          <Reveal
            as="p"
            className="section-desc"
            delay={0.1}
          >
            No fake job history here — just a structured, hands-on
            training program that took the fundamentals into real
            project work.
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="experience__timeline">

          {/* Timeline line */}
          <div className="experience__rail">
            <motion.span
              className="experience__rail-progress"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={viewportOnce}
              transition={{ duration: 1.3, ease: "easeOut" }}
            />
          </div>

          {/* Timeline node */}
          <motion.div
            className="experience__node"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span />
          </motion.div>

          {/* Main Card */}
          <motion.article
            className="experience__card glass"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            {/* Card glow */}
            <div className="experience__card-glow" />

            {/* HUD corners */}
            <span className="experience__corner experience__corner--tl" />
            <span className="experience__corner experience__corner--br" />

            {/* Top status */}
            <div className="experience__meta">
              <span className="experience__meta-label">
                <Sparkles size={12} />
                PROFESSIONAL DEVELOPMENT
              </span>

              <span className="experience__meta-status">
                COMPLETED
              </span>
            </div>

            {/* Header */}
            <div className="experience__head">
              <motion.div
                className="experience__icon"
                whileHover={{ rotate: -6, scale: 1.05 }}
              >
                <Briefcase size={21} />
              </motion.div>

              <div className="experience__identity">
                <span className="experience__eyebrow">
                  JAVA FULL STACK
                </span>

                <h3 className="experience__role">
                  {training.role}
                </h3>

                <p className="experience__company">
                  {training.company}
                </p>
              </div>

              <span className="experience__duration pill">
                {training.duration}
              </span>
            </div>

            {/* Divider */}
            <div className="experience__divider">
              <span />
            </div>

            {/* Topics */}
            <div className="experience__topics-head">
              <div>
                <span className="experience__topics-kicker">
                  CORE LEARNING
                </span>

                <h4>Hands-on expertise</h4>
              </div>

              <span className="experience__topics-count">
                {String(training.topics.length).padStart(2, "0")} MODULES
              </span>
            </div>

            <motion.ul
              className="experience__topics"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer(0.055, 0.08)}
            >
              {training.topics.map((topic, index) => (
                <motion.li
                  key={topic}
                  variants={fadeUp}
                  className="experience__topic"
                  whileHover={{ x: 5 }}
                >
                  <span className="experience__topic-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="experience__topic-icon-wrap">
                    <CheckCircle2 size={15} />
                  </span>

                  <span className="experience__topic-text">
                    {topic}
                  </span>

                  <ArrowUpRight
                    className="experience__topic-arrow"
                    size={14}
                  />
                </motion.li>
              ))}
            </motion.ul>

            {/* Bottom */}
            <div className="experience__footer">
              <span>BUILD • LEARN • SHIP</span>

              <div className="experience__footer-line" />

              <span>01</span>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}