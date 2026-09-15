import { motion } from "framer-motion";
import { Code2, Database, Layers3, Sparkles, ArrowUpRight } from "lucide-react";
import { skillCategories, softSkills } from "../data/portfolioData";
import Reveal from "../components/Reveal";
import {
  staggerContainer,
  fadeUp,
  viewportOnce,
} from "../utils/motionVariants";
import "./Skills.css";

const categoryIcons = [Code2, Layers3, Database];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="skills__ambient skills__ambient--one" />
      <div className="skills__ambient skills__ambient--two" />

      <div className="container">
        {/* Section Heading */}
        <div className="section-head skills__head">
          <Reveal as="div" className="section-kicker">
            Skills
          </Reveal>

          <Reveal as="h2" className="section-title" delay={0.05}>
            The stack behind every build
          </Reveal>

          <Reveal as="p" className="section-desc" delay={0.1}>
            A working, hands-on toolkit across the full Java stack — from
            backend services to the interfaces built on top of them.
          </Reveal>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="skills__grid"
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {skillCategories.map((category, catIndex) => {
            const Icon = categoryIcons[catIndex % categoryIcons.length];

            return (
              <motion.article
                key={category.title}
                className="skills__card glass"
                variants={fadeUp}
                whileHover={{ y: -8 }}
              >
                {/* Card glow */}
                <div className="skills__card-glow" />

                {/* Top line */}
                <div className="skills__card-top">
                  <div className="skills__icon">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <span className="skills__index">
                    0{catIndex + 1}
                  </span>
                </div>

                <div className="skills__card-heading">
                  <span className="skills__eyebrow">
                    TECHNOLOGY GROUP
                  </span>

                  <h3 className="skills__card-title">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <motion.div
                  className="skills__chips"
                  variants={staggerContainer(0.045, 0.05)}
                >
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="skills__chip"
                      variants={fadeUp}
                      whileHover={{
                        scale: 1.06,
                        y: -3,
                      }}
                    >
                      <span className="skills__chip-dot" />
                      {skill}

                      <ArrowUpRight
                        className="skills__chip-arrow"
                        size={12}
                      />
                    </motion.span>
                  ))}
                </motion.div>

                {/* Bottom decoration */}
                <div className="skills__card-footer">
                  <span>
                    {String(category.skills.length).padStart(2, "0")} skills
                  </span>

                  <span className="skills__card-line" />
                </div>

                {/* HUD corners */}
                <span className="skills__corner skills__corner--tl" />
                <span className="skills__corner skills__corner--br" />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Soft Skills */}
        <Reveal as="div" className="skills__soft">
          <div className="skills__soft-header">
            <div>
              <span className="skills__soft-kicker">
                <Sparkles size={13} />
                PERSONAL EDGE
              </span>

              <h3 className="skills__soft-title">
                Beyond the code
              </h3>
            </div>

            <span className="skills__soft-count">
              {String(softSkills.length).padStart(2, "0")} traits
            </span>
          </div>

          <motion.div
            className="skills__soft-chips"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.06, 0.08)}
          >
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="pill skills__soft-chip"
                variants={fadeUp}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
              >
                <span className="skills__soft-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{skill}</span>

                <ArrowUpRight size={13} />
              </motion.span>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}