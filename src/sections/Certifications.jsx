import { motion } from "framer-motion";
import { Award, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

import { certifications } from "../data/portfolioData";
import Reveal from "../components/Reveal";
import { viewportOnce, EASE } from "../utils/motionVariants";

import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="certifications__ambient certifications__ambient--one" />
      <div className="certifications__ambient certifications__ambient--two" />

      <div className="container">
        {/* Section Header */}
        <div className="section-head certifications__head">
          <Reveal as="div" className="section-kicker">
            Certifications
          </Reveal>

          <Reveal
            as="h2"
            className="section-title"
            delay={0.05}
          >
            HackerRank, Java
          </Reveal>

          <Reveal
            as="p"
            className="certifications__intro"
            delay={0.1}
          >
            A Java (Basic) certificate from HackerRank. One proof, earned.
          </Reveal>
        </div>

        {/* Certification Grid */}
        <div className="certifications__grid">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              className="cert-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.45,
                ease: EASE,
                delay: index * 0.04,
              }}
            >
              {/* Glow */}
              <div className="cert-card__glow" />

              {/* Top line */}
              <div className="cert-card__top">
                <span className="cert-card__index">
                  0{index + 1}
                </span>

                <span className="cert-card__label">
                  <Sparkles size={12} />
                  VERIFIED
                </span>
              </div>

              {/* Main Content */}
              <div className="cert-card__content">
                <motion.div className="cert-card__icon">
                  <Award size={25} strokeWidth={1.8} />
                </motion.div>

                <div className="cert-card__info">
                  <h3 className="cert-card__name">
                    {cert.name}
                  </h3>

                  <p className="cert-card__issuer">
                    Issued by{" "}
                    <span>{cert.issuer}</span>
                  </p>
                </div>

                <div className="cert-card__arrow">
                  <ArrowUpRight size={19} />
                </div>
              </div>

              {/* Bottom */}
              <div className="cert-card__bottom">
                <div className="cert-card__status">
                  <CheckCircle2 size={14} />
                  <span>Skill Certified</span>
                </div>

                <span className="cert-card__line" />
              </div>

              {/* HUD corners */}
              <span className="cert-card__corner cert-card__corner--tl" />
              <span className="cert-card__corner cert-card__corner--br" />
            </motion.article>
          ))}
        </div>

        {/* Bottom Trust Strip */}
        <Reveal
          as="div"
          className="certifications__footer"
          delay={0.15}
        >
          <div className="certifications__footer-icon">
            <Award size={18} />
          </div>

          <div>
            <span className="certifications__footer-label">
              STILL LEARNING
            </span>

            <p>
              One Java certificate so far. More will follow the work.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}