import { useEffect, useState } from "react";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  X,
} from "lucide-react";
import { projects } from "../data/portfolioData";
import Reveal from "../components/Reveal";
import "./Projects.css";

function ProjectCard({ project, index, onView, onPointerMove }) {
  return (
    <article
      className="project-card"
      onMouseEnter={() =>
        onPointerMove({ visible: true, x: 0, y: 0 })
      }
      onMouseMove={(event) =>
        onPointerMove({
          visible: true,
          x: event.clientX,
          y: event.clientY,
        })
      }
      onMouseLeave={() =>
        onPointerMove((current) => ({ ...current, visible: false }))
      }
    >
      <div className="project-card__visual">
        <img
          src={project.image}
          alt={project.name}
          className="project-card__image"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="project-card__body">
        <div className="project-card__heading">
          <div>
            <span className="project-card__index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="project-card__name">{project.name}</h3>
          </div>
          <span className="project-card__year">{project.year}</span>
        </div>

        <p className="project-card__summary">{project.summary}</p>

        <div className="project-card__meta">
          <span className="project-card__type">{project.type}</span>
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
        </div>

        <div className="project-card__actions">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-card__icon-btn"
            aria-label={`${project.name} GitHub repository`}
          >
            <Github size={16} />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-card__icon-btn"
              aria-label={`${project.name} live demo`}
            >
              <ExternalLink size={16} />
            </a>
          )}
          <button
            className="project-card__details-btn"
            onClick={() => onView(project)}
            aria-haspopup="dialog"
          >
            View details <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(event) => event.stopPropagation()}
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
        <h3 className="project-modal__title">{project.name}</h3>
        <p className="project-modal__desc">{project.description}</p>

        <h4 className="project-modal__subhead">Key features</h4>
        <ul className="project-modal__features">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <h4 className="project-modal__subhead">Technologies</h4>
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
            className="btn btn-ghost"
          >
            <Github size={16} /> View on GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <ExternalLink size={16} /> Live demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [viewCursor, setViewCursor] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (!activeProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <Reveal as="div" className="section-kicker">
            Work
          </Reveal>
          <Reveal as="h2" className="section-title" delay={0.05}>
            Five things I shipped
          </Reveal>
          <Reveal as="p" className="section-desc" delay={0.1}>
            School records, a notes app, a storefront, a live drawing game,
            and this portfolio.
          </Reveal>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.id}-${index}`}
              project={project}
              index={index}
              onView={setActiveProject}
              onPointerMove={setViewCursor}
            />
          ))}
        </div>
      </div>

      <div
        className={`projects__view-cursor ${
          viewCursor.visible ? "is-visible" : ""
        }`}
        style={{ left: viewCursor.x, top: viewCursor.y }}
        aria-hidden="true"
      >
        View
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
