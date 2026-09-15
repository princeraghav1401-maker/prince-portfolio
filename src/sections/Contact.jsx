import { useRef, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Wifi,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { profile } from "../data/portfolioData";
import Reveal from "../components/Reveal";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/motionVariants";
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

  const cardRef = useRef(null);
  const buttonRef = useRef(null);

  // Card tilt
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
    mass: 0.7,
  });

  const springRotateY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
    mass: 0.7,
  });

  // Magnetic button
  const buttonX = useMotionValue(0);
  const buttonY = useMotionValue(0);

  const springButtonX = useSpring(buttonX, {
    stiffness: 300,
    damping: 18,
  });

  const springButtonY = useSpring(buttonY, {
    stiffness: 300,
    damping: 18,
  });

  const handleCardMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateYValue = ((x / rect.width) - 0.5) * 8;
    const rotateXValue = ((y / rect.height) - 0.5) * -8;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleCardLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const handleButtonMove = (event) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    buttonX.set(x * 0.22);
    buttonY.set(y * 0.22);
  };

  const handleButtonLeave = () => {
    buttonX.set(0);
    buttonY.set(0);
  };

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
        message: "Message sent — thanks for reaching out! I’ll reply soon.",
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
      <div className="contact__ambient contact__ambient--one" />
      <div className="contact__ambient contact__ambient--two" />

      <div className="container">
        {/* HEADER */}
        <Reveal variants={fadeUp}>
          <div className="contact__header">
            <div className="contact__eyebrow">
              <span className="contact__eyebrow-line" />
              <Sparkles size={15} />
              <span>OPEN TO OPPORTUNITIES</span>
            </div>

            <h2 className="section-title">
              Let’s build something
              <span> extraordinary.</span>
            </h2>

            <p className="contact__intro">
              Have a project, opportunity, or idea in mind? Send me a message
              and let’s turn it into something meaningful.
            </p>
          </div>
        </Reveal>

        <div className="contact__grid">
          {/* LEFT SIDE */}
          <Reveal variants={fadeUp}>
            <div className="contact__info">
              <div className="contact__availability">
                <span className="contact__status-dot" />

                <div>
                  <strong>Available for work</strong>
                  <span>Currently accepting opportunities</span>
                </div>

                <span className="contact__live">LIVE</span>
              </div>

              <div className="contact__info-card">
                <div className="contact__info-icon">
                  <Mail size={20} />
                </div>

                <div className="contact__info-content">
                  <span>Email</span>
                  <a href={`mailto:${profile.email}`}>
                    {profile.email}
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <div className="contact__info-card">
                <div className="contact__info-icon">
                  <Phone size={20} />
                </div>

                <div className="contact__info-content">
                  <span>Phone</span>
                  <a href={`tel:${profile.phone}`}>
                    {profile.phone}
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <div className="contact__info-card">
                <div className="contact__info-icon">
                  <MapPin size={20} />
                </div>

                <div className="contact__info-content">
                  <span>Location</span>
                  <p>Bulandshahr, Uttar Pradesh, India</p>
                </div>
              </div>

              {/* SOCIALS */}
              <div className="contact__socials">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__social"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__social"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* HUD */}
              <div className="contact__hud">
                <div className="contact__hud-top">
                  <span>
                    <Wifi size={13} />
                    CONNECTION
                  </span>

                  <strong>STABLE</strong>
                </div>

                <div className="contact__hud-line">
                  <span />
                </div>

                <div className="contact__hud-bottom">
                  <span>PORTFOLIO.NODE</span>
                  <span>ONLINE</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal variants={fadeUp}>
            <motion.div
              ref={cardRef}
              className="contact__form-card"
              style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformPerspective: 1200,
              }}
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
            >
              <div className="contact__card-glow" />

              <span className="contact__corner contact__corner--tl" />
              <span className="contact__corner contact__corner--tr" />
              <span className="contact__corner contact__corner--bl" />
              <span className="contact__corner contact__corner--br" />

              <div className="contact__form-header">
                <div>
                  <span className="contact__form-label">TRANSMISSION</span>
                  <h3>Send a message</h3>
                </div>

                <div className="contact__online">
                  <span />
                  ONLINE
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="name">YOUR NAME</label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Prince Raghav"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                  </div>

                  <div className="contact__field">
                    <label htmlFor="email">EMAIL ADDRESS</label>

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
                  <label htmlFor="subject">SUBJECT</label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Let's work together"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact__field">
                  <div className="contact__message-label">
                    <label htmlFor="message">MESSAGE</label>
                    <span>{form.message.length}/500</span>
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    maxLength={500}
                    placeholder="Tell me a little about your project..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact__submit-row">
                  <span className="contact__secure">
                    <CheckCircle2 size={14} />
                    Secure transmission
                  </span>

                  <motion.button
                    ref={buttonRef}
                    type="submit"
                    className="contact__submit"
                    disabled={status.type === "loading"}
                    style={{
                      x: springButtonX,
                      y: springButtonY,
                    }}
                    onMouseMove={handleButtonMove}
                    onMouseLeave={handleButtonLeave}
                    whileTap={{ scale: 0.96 }}
                  >
                    <span>
                      {status.type === "loading"
                        ? "Sending..."
                        : "Send Message"}
                    </span>

                    <Send size={17} />
                  </motion.button>
                </div>

                {status.message && (
                  <motion.div
                    className={`contact__status contact__status--${status.type}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {status.type === "success" && (
                      <CheckCircle2 size={16} />
                    )}

                    {status.message}
                  </motion.div>
                )}
              </form>

              <div className="contact__form-footer">
                <Sparkles size={13} />
                <span>I usually respond within 24–48 hours.</span>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;