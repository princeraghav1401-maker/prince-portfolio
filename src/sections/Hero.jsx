import { ArrowUpRight } from "lucide-react";
import HeroTechOrbit from "../components/HeroTechOrbit";
import { heroBadges, heroSkillOrbs, profile } from "../data/portfolioData";
import { scrollToSection } from "../utils/scroll";
import "./Hero.css";

export default function Hero() {
  const locationShort = profile.location.split(",")[0];

  const portrait = (
    <div className="hero__portrait-shell">
      <div className="hero__portrait-ring" aria-hidden="true" />
      <div className="hero__portrait-backdrop" aria-hidden="true" />
      <img
        className="hero__portrait"
        src="/prince-raghav.jpg"
        alt="Prince Raghav"
        fetchPriority="high"
      />
    </div>
  );

  const hireBadge = (
    <div className="hero__hire-badge" aria-label={profile.availability}>
      <span className="hero__hire-ring" />
      <span className="hero__hire-core">
        Available
        <br />
        for Hire
      </span>
    </div>
  );

  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__copy">
          <p className="hero__status pill">
            <span className="hero__status-dot" />
            {profile.role} &bull; {locationShort}, India
          </p>

          <h1 className="hero__title">
            Meet the Expert{" "}
            <span className="gradient-text">Full Stack Developer</span>
          </h1>

          <p className="hero__subtitle">{profile.tagline}</p>

          <div className="hero__actions">
            <button
              type="button"
              className="btn btn-primary hero__btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              <span className="hero__btn-icon" aria-hidden="true">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </span>
              Explore Projects
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </button>
          </div>

          <div className="hero__tags">
            {heroBadges.map((tech) => (
              <span key={tech} className="pill hero__tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-glow" aria-hidden="true" />

          <HeroTechOrbit
            skills={heroSkillOrbs}
            portrait={portrait}
            hireBadge={hireBadge}
          />
        </div>
      </div>
    </section>
  );
}