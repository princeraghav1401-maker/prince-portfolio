import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
  X,
} from "lucide-react";
import { projects } from "../data/portfolioData";
import Reveal from "../components/Reveal";
import { fadeUp, viewportOnce, EASE } from "../utils/motionVariants";
import "./Projects.css";

function ProjectCard({ project, index, onView }) {
  return (
    <motion.article
      className="project-card glass"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay: index * 0.12 }}
      whileHover={{ y: -10 }}
    >
      <div className="project-card__visual">
        <div className="project-card__ambient" />
        <div className="project-card__grid" />

        <motion.div
          className="project-card__image-wrap"
          whileHover={{ scale: 1.045, rotateX: 2, rotateY: -2 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <img
            src={project.image}
            alt={project.name}
            className="project-card__image"
          />
        </motion.div>

        <div className="project-card__top">
          <span className="project-card__type">
            <span className="project-card__dot" />
            {project.type}
          </span>

          <span className="project-card__year">{project.year}</span>
        </div>

        <div className="project-card__scanline" />
        <div className="project-card__corner project-card__corner--tl" />
        <div className="project-card__corner project-card__corner--tr" />
        <div className="project-card__corner project-card__corner--bl" />
        <div className="project-card__corner project-card__corner--br" />
      </div>

      <div className="project-card__body">
        <div className="project-card__heading">
          <div>
            <span className="project-card__index">
              0{index + 1}
            </span>

            <h3 className="project-card__name">{project.name}</h3>
          </div>

          <motion.span
            className="project-card__arrow"
            whileHover={{ rotate: 45, scale: 1.1 }}
          >
            <ArrowUpRight size={19} />
          </motion.span>
        </div>

        <p className="project-card__summary">
          {project.summary}
        </p>

        <div className="project-card__tech">
          {project.tech.slice(0, 5).map((tech) => (
            <span key={tech} className="project-card__tech-badge">
              {tech}
            </span>
          ))}

          {project.tech.length > 5 && (
            <span className="project-card__tech-badge project-card__tech-more">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        <div className="project-card__actions">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-card__icon-btn"
            aria-label={`${project.name} GitHub repository`}
          >
            <Github size={17} />
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-card__icon-btn"
              aria-label={`${project.name} live demo`}
            >
              <ExternalLink size={17} />
            </a>
          )}

          <button
            className="project-card__details-btn"
            onClick={() => onView(project)}
          >
            <Sparkles size={15} />
            View details
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="project-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="project-modal glass"
        initial={{ opacity: 0, scale: 0.92, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 10 }}
        transition={{ duration: 0.4, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
      >
        <button
          className="project-modal__close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        <span className="project-card__type">
          {project.type} · {project.year}
        </span>

        <h3 className="project-modal__title">
          {project.name}
        </h3>

        <p className="project-modal__desc">
          {project.description}
        </p>

        <h4 className="project-modal__subhead">
          Key features
        </h4>

        <ul className="project-modal__features">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <h4 className="project-modal__subhead">
          Technologies
        </h4>

        <div className="project-card__tech">
          {project.tech.map((tech) => (
            <span key={tech} className="project-card__tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-modal__actions">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <Github size={16} />
            View on GitHub
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <ExternalLink size={16} />
              Live demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <Reveal as="div" className="section-kicker">
            Selected Work
          </Reveal>

          <Reveal as="h2" className="section-title" delay={0.05}>
            Projects that <span className="gradient-text">speak for me.</span>
          </Reveal>

          <Reveal as="p" className="section-desc" delay={0.1}>
            A selection of full-stack projects focused on clean
            architecture, modern interfaces and real-world
            functionality.
          </Reveal>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onView={setActiveProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}