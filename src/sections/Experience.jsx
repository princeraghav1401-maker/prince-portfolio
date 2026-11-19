import { motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Handshake,
} from "lucide-react";
import { experiences } from "../data/portfolioData";
import Reveal from "../components/Reveal";
import {
  staggerContainer,
  fadeUp,
  viewportOnce,
} from "../utils/motionVariants";
import "./Experience.css";

const experienceIcons = {
  briefcase: Briefcase,
  handshake: Handshake,
};

function ExperienceCard({ entry, index }) {
  const Icon = experienceIcons[entry.icon] ?? Briefcase;

  return (
    <div className="experience__entry">
      <motion.div
        className="experience__node"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      >
        <span />
      </motion.div>

      <motion.article
        className="experience__card glass"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <div className="experience__card-glow" />

        <span className="experience__corner experience__corner--tl" />
        <span className="experience__corner experience__corner--br" />

        <div className="experience__meta">
          <span className="experience__meta-label">
            <Sparkles size={12} />
            {entry.metaLabel}
          </span>

          <span className="experience__meta-status">{entry.metaStatus}</span>
        </div>

        <div className="experience__head">
          <motion.div className="experience__icon">
            <Icon size={21} />
          </motion.div>

          <div className="experience__identity">
            <span className="experience__eyebrow">{entry.eyebrow}</span>

            <h3 className="experience__role">{entry.role}</h3>

            <p className="experience__company">{entry.company}</p>
          </div>

          <span className="experience__duration pill">{entry.duration}</span>
        </div>

        <div className="experience__divider">
          <span />
        </div>

        <div className="experience__topics-head">
          <div>
            <span className="experience__topics-kicker">
              {entry.topicsKicker}
            </span>

            <h4>{entry.topicsTitle}</h4>
          </div>

          <span className="experience__topics-count">
            {String(entry.topics.length).padStart(2, "0")}{" "}
            {entry.topicsCountLabel}
          </span>
        </div>

        <motion.ul
          className="experience__topics"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.055, 0.08)}
        >
          {entry.topics.map((topic, topicIndex) => (
            <motion.li key={topic} variants={fadeUp} className="experience__topic">
              <span className="experience__topic-number">
                {String(topicIndex + 1).padStart(2, "0")}
              </span>

              <span className="experience__topic-icon-wrap">
                <CheckCircle2 size={15} />
              </span>

              <span className="experience__topic-text">{topic}</span>

              <ArrowUpRight className="experience__topic-arrow" size={14} />
            </motion.li>
          ))}
        </motion.ul>

        <div className="experience__footer">
          <span>{entry.footerTag}</span>

          <div className="experience__footer-line" />

          <span>{entry.footerIndex}</span>
        </div>
      </motion.article>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="experience__ambient experience__ambient--one" />
      <div className="experience__ambient experience__ambient--two" />

      <div className="container">
        <div className="section-head">
          <Reveal as="div" className="section-kicker">
            Experience
          </Reveal>

          <Reveal as="h2" className="section-title" delay={0.05}>
            Training and freelance delivery
          </Reveal>

          <Reveal as="p" className="section-desc" delay={0.1}>
            Six months at CodeSquadz in Noida, plus a completed freelance
            e-commerce build for an independent client.
          </Reveal>
        </div>

        <div className="experience__timeline">
          <div className="experience__rail">
            <motion.span
              className="experience__rail-progress"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={viewportOnce}
              transition={{ duration: 1.3, ease: "easeOut" }}
            />
          </div>

          {experiences.map((entry, index) => (
            <ExperienceCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}