import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import "./AnimatedBackground.css";

const stars = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  left: `${(i * 37.7) % 100}%`,
  top: `${(i * 61.3) % 100}%`,
  size: 1 + (i % 3),
  duration: 2.5 + (i % 5) * 0.8,
  delay: (i % 8) * 0.4,
  depth: i % 3,
}));

const shootingStars = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  top: `${8 + i * 18}%`,
  left: `${65 + (i % 3) * 10}%`,
  delay: i * 4.5,
}));

export default function AnimatedBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 40,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 40,
    damping: 25,
  });

  const starsX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const starsY = useTransform(smoothY, [-1, 1], [-18, 18]);

  const nebulaX = useTransform(smoothX, [-1, 1], [25, -25]);
  const nebulaY = useTransform(smoothY, [-1, 1], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      mouseX.set(x);
      mouseY.set(y);

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [mouseX, mouseY]);

  return (
    <div className="animated-bg" aria-hidden="true">

      {/* Deep space base */}
      <div className="space-base" />

      {/* Animated nebula */}
      <motion.div
        className="nebula nebula--one"
        style={{
          x: nebulaX,
          y: nebulaY,
        }}
      />

      <motion.div
        className="nebula nebula--two"
        style={{
          x: nebulaY,
          y: nebulaX,
        }}
      />

      <motion.div
        className="nebula nebula--three"
        style={{
          x: useTransform(
            smoothX,
            [-1, 1],
            [-12, 12]
          ),
          y: useTransform(
            smoothY,
            [-1, 1],
            [15, -15]
          ),
        }}
      />

      {/* Moving cosmic grid */}
      <motion.div
        className="space-grid"
        style={{
          x: useTransform(
            smoothX,
            [-1, 1],
            [-8, 8]
          ),
          y: useTransform(
            smoothY,
            [-1, 1],
            [-8, 8]
          ),
        }}
      />

      {/* Stars */}
      <motion.div
        className="stars-layer"
        style={{
          x: starsX,
          y: starsY,
        }}
      >
        {stars.map((star) => (
          <motion.span
            key={star.id}
            className={`star star--depth-${star.depth}`}
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [
                0.15,
                0.85,
                0.25,
                1,
                0.15,
              ],
              scale: [
                0.7,
                1.2,
                0.8,
                1.35,
                0.7,
              ],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Large glowing planets/orbs */}
      <motion.div
        className="cosmic-orb cosmic-orb--one"
        animate={{
          x: [0, 35, -10, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="cosmic-orb cosmic-orb--two"
        animate={{
          x: [0, -30, 15, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.94, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Planet rings */}
      <motion.div
        className="planet planet--one"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="planet__body" />
        <span className="planet__ring" />
      </motion.div>

      <motion.div
        className="planet planet--two"
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 48,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="planet__body" />
        <span className="planet__ring" />
      </motion.div>

      {/* Shooting stars */}
      <div className="shooting-stars">
        {shootingStars.map((star) => (
          <motion.span
            key={star.id}
            className="shooting-star"
            style={{
              top: star.top,
              left: star.left,
            }}
            animate={{
              x: [0, -420],
              y: [0, 420],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.8,
              delay: star.delay,
              repeat: Infinity,
              repeatDelay: 8,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Horizon glow */}
      <motion.div
        className="horizon-glow"
        animate={{
          opacity: [0.3, 0.55, 0.3],
          scaleX: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mouse-follow glow */}
      <motion.div
        className="mouse-glow"
        animate={{
          left: `${50 + mouse.x * 12}%`,
          top: `${50 + mouse.y * 12}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 35,
          damping: 25,
        }}
      />

      {/* Vignette */}
      <div className="space-vignette" />

      {/* Film grain */}
      <div className="space-noise" />

    </div>
  );
}