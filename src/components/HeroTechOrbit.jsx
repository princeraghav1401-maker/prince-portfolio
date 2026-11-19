import { motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";

function OrbitTechIcon({ skill, index, layout }) {
  const reduced = useReducedMotion();
  const delay = index * 0.12;

  return (
    <motion.div
      className={`hero__orbit-icon hero__orbit-icon--${skill.slot} hero__orbit-icon--${layout}`}
      tabIndex={layout === "orbit" ? 0 : undefined}
      role={layout === "orbit" ? "img" : undefined}
      aria-label={skill.label}
      initial={reduced ? false : { opacity: 0, scale: 0.94 }}
      animate={reduced ? undefined : { opacity: 1, scale: 1 }}
      whileHover={reduced ? undefined : { scale: 1.08 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        className="hero__orbit-glass"
        aria-hidden={layout === "orbit"}
        animate={reduced || layout === "strip" ? undefined : { y: [0, -4, 0] }}
        transition={
          reduced
            ? undefined
            : {
                y: {
                  duration: 6 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                },
              }
        }
      >
        <img src={skill.icon} alt="" width={24} height={24} loading="lazy" />
      </motion.span>
      {layout === "orbit" && (
        <span className="hero__orbit-tooltip">{skill.label}</span>
      )}
    </motion.div>
  );
}

export default function HeroTechOrbit({ skills, portrait, hireBadge }) {
  return (
    <>
      <div className="hero__orbit-stage">
        <div className="hero__portrait-cluster">
          {portrait}
          <div className="hero__orbit-nodes" aria-label="Core technologies">
            {skills.map((skill, index) => (
              <OrbitTechIcon
                key={skill.id}
                skill={skill}
                index={index}
                layout="orbit"
              />
            ))}
          </div>
        </div>
        {hireBadge}
      </div>

      <div className="hero__orbit-strip" aria-label="Core technologies">
        {skills.map((skill, index) => (
          <OrbitTechIcon
            key={`${skill.id}-strip`}
            skill={skill}
            index={index}
            layout="strip"
          />
        ))}
      </div>
    </>
  );
}