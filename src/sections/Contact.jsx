import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Zap,
} from "lucide-react";
import emailjs from "@emailjs/browser";

import { profile } from "../data/portfolioData";
import Reveal from "../components/Reveal";
import "./Contact.css";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.type !== "idle") {
      setStatus({
        type: "idle",
        message: "",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    setStatus({
      type: "loading",
      message: "Sending your message...",
    });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setForm(initialForm);

      setStatus({
        type: "success",
        message: "Message sent — I'll get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or email me directly.",
      });
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <Reveal as="div" className="contact__header">
          <h2 className="contact__title">
            Let&rsquo;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="contact__intro">
            You can start a project, ask about a role, or just say hello. Fill in the form
            or use the direct channels below — I usually reply within 24–48 hours.
          </p>
        </Reveal>

        <div className="contact__grid">
          <Reveal as="div" className="contact__inquiry glass">
            <div className="contact__card-head">
              <div className="contact__card-icon" aria-hidden="true">
                <Send size={20} />
              </div>
              <div>
                <p className="contact__card-label">Send an Inquiry</p>
                <h3>Tell me about your idea</h3>
              </div>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project / opportunity / hello"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  maxLength={500}
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="contact__submit"
                disabled={status.type === "loading"}
              >
                {status.type === "loading" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              {status.message && (
                <p
                  className={`contact__status contact__status--${status.type}`}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
            </form>
          </Reveal>

          <div className="contact__side">
            <Reveal as="div" className="contact__channels glass">
              <h3 className="contact__channels-title">Direct Channels</h3>

              <a className="contact__channel" href={`mailto:${profile.email}`}>
                <span className="contact__channel-icon">
                  <Mail size={18} />
                </span>
                <span>
                  <small>Email</small>
                  {profile.email}
                </span>
                <ArrowUpRight size={16} />
              </a>

              <a className="contact__channel" href={`tel:${profile.phone}`}>
                <span className="contact__channel-icon">
                  <Phone size={18} />
                </span>
                <span>
                  <small>Phone</small>
                  {profile.phone}
                </span>
                <ArrowUpRight size={16} />
              </a>

              <div className="contact__channel contact__channel--static">
                <span className="contact__channel-icon">
                  <MapPin size={18} />
                </span>
                <span>
                  <small>Location</small>
                  {profile.location}
                </span>
              </div>

              <div className="contact__profiles">
                <p>Professional Profiles</p>
                <div className="contact__profile-links">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal as="div" className="contact__sla glass">
              <span className="contact__sla-icon" aria-hidden="true">
                <Zap size={18} />
              </span>
              <div>
                <strong>Quick response</strong>
                <p>I read every message and reply within 24–48 hours.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;