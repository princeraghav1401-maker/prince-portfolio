import { aboutParagraphs, aboutStats } from "../data/portfolioData";
import Reveal from "../components/Reveal";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__mast">
          <Reveal as="p" className="section-kicker">
            About me
          </Reveal>
          <Reveal as="h2" className="about__title" delay={0.06}>
            Trained on real apps, not slides.
          </Reveal>
        </div>

        <div className="about__layout">
          <div className="about__story">
            <Reveal as="p" className="about__lede" delay={0.08}>
              BCA finished in 2025. MCA through 2027. Six months inside a Java full-stack program.
            </Reveal>
            <div className="about__paragraphs">
              {aboutParagraphs.map((paragraph, index) => (
                <Reveal
                  as="p"
                  key={paragraph.slice(0, 16)}
                  className="about__paragraph"
                  delay={0.1 + index * 0.06}
                >
                  {paragraph}
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="about__stats" aria-label="Quick snapshot">
            <p className="about__stats-label">
              <span>Snapshot</span>
              <span>2026</span>
            </p>
            <ol>
              {aboutStats.map((stat, index) => (
                <li key={stat.label}>
                  <span className="about__stat-index">0{index + 1}</span>
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <Reveal as="div" className="about__approach" delay={0.12}>
          <p className="about__approach-kicker">My approach</p>
          <blockquote>
            Understand the data. Then the API. Then the screen.
          </blockquote>
          <p className="about__focus">
            <span>Current focus</span>
            Java Full Stack Development
          </p>
        </Reveal>
      </div>
    </section>
  );
}
