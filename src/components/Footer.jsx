import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__border" />
      <div className="container footer__inner">
        <p className="footer__text">Built by {profile.name}</p>

        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <p className="footer__copy">&copy; {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
