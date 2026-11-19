import { motion } from "framer-motion";
import {
  GraduationCap,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { education } from "../data/portfolioData";
import Reveal from "../components/Reveal";
import { viewportOnce, EASE } from "../utils/motionVariants";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="education__ambient education__ambient--one" />
      <div className="education__ambient education__ambient--two" />

      <div className="container">
        {/* Section Heading */}
        <div className="section-head">
          <Reveal as="div" className="section-kicker">
            Education
          </Reveal>

          <Reveal
            as="h2"
            className="section-title"
            delay={0.05}
          >
            From board exams to MCA
          </Reveal>

          <Reveal
            as="p"
            className="section-desc"
            delay={0.1}
          >
            High school and intermediate under the Uttar Pradesh board,
            then BCA and MCA at Marathwada Institute of Technology,
            Bulandshahr.
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="timeline">

          {/* Timeline rail */}
          <div className="timeline__rail">
            <motion.span
              className="timeline__rail-progress"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={viewportOnce}
              transition={{
                duration: 1.4,
                ease: "easeOut",
              }}
            />
          </div>

          {education.map((item, index) => (
            <motion.div
              key={item.id}
              className="timeline__item"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.65,
                ease: EASE,
                delay: index * 0.12,
              }}
            >
              {/* Timeline node */}
              <motion.span
                className="timeline__dot"
              >
                <GraduationCap size={14} />
              </motion.span>

              {/* Card */}
              <motion.article
                className="timeline__card glass"
              >
                <div className="timeline__card-glow" />

                {/* HUD corners */}
                <span className="timeline__corner timeline__corner--tl" />
                <span className="timeline__corner timeline__corner--br" />

                {/* Card top */}
                <div className="timeline__top">
                  <span className="timeline__index">
                    0{index + 1}
                  </span>

                  <span className="timeline__type">
                    <Sparkles size={11} />
                    ACADEMIC
                  </span>
                </div>

                {/* Header */}
                <div className="timeline__card-head">
                  <div className="timeline__degree-wrap">
                    <span className="timeline__eyebrow">
                      QUALIFICATION
                    </span>

                    <h3 className="timeline__degree">
                      {item.degree}
                    </h3>
                  </div>

                  <span className="timeline__status pill">
                    <CheckCircle2 size={12} />
                    {item.status}
                  </span>
                </div>

                {/* Institution */}
                <div className="timeline__institution-row">
                  <span className="timeline__institution">
                    {item.institution}
                  </span>

                  <ArrowUpRight
                    className="timeline__arrow"
                    size={16}
                  />
                </div>

                {/* Period */}
                <div className="timeline__bottom">
                  <span className="timeline__period">
                    {item.period}
                  </span>

                  <span className="timeline__line" />
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}