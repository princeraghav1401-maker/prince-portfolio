import { skillCategories, softSkills } from "../data/portfolioData";
import Reveal from "../components/Reveal";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills__intro">
          <div>
            <Reveal as="div" className="section-kicker">
              Toolkit
            </Reveal>
            <Reveal as="h2" className="section-title" delay={0.05}>
              Tools I actually use
            </Reveal>
          </div>
          <Reveal as="p" className="section-desc" delay={0.1}>
            Languages, frameworks, and the ideas that hold a full-stack
            app together.
          </Reveal>
        </div>

        <div className="skills__list">
          {skillCategories.map((category, index) => (
            <article className="skills__row" key={category.title}>
              <span className="skills__index">0{index + 1}</span>
              <h3>{category.title}</h3>
              <p>
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </p>
              <span className="skills__count">
                {String(category.skills.length).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>

        <div className="skills__soft">
          <div className="skills__soft-head">
            <p>How I work</p>
            <span>{String(softSkills.length).padStart(2, "0")} traits</span>
          </div>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={skill}>
                <span>0{index + 1}</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
