import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import "./CustomCursor.css";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Main cursor = very responsive
  const coreX = useSpring(mouseX, {
    stiffness: 900,
    damping: 38,
    mass: 0.2,
  });

  const coreY = useSpring(mouseY, {
    stiffness: 900,
    damping: 38,
    mass: 0.2,
  });

  // Halo = smooth delayed movement
  const haloX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
    mass: 0.8,
  });

  const haloY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
    mass: 0.8,
  });

  // Trail = slower than halo
  const trailX = useSpring(mouseX, {
    stiffness: 55,
    damping: 18,
    mass: 1.2,
  });

  const trailY = useSpring(mouseY, {
    stiffness: 55,
    damping: 18,
    mass: 1.2,
  });

  useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      setVisible(true);

      const interactive = event.target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setHovered(Boolean(interactive));
    };

    const handleDown = () => {
      setPressed(true);
    };

    const handleUp = () => {
      setPressed(false);
    };

    const handleLeave = () => {
      setVisible(false);
    };

    const handleEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);

      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  return (
    <div className="luxury-cursor">

      {/* =================================
          SOFT COSMIC TRAIL
      ================================= */}

      <motion.div
        className="cursor-trail"
        style={{
          x: trailX,
          y: trailY,
        }}
        animate={{
          scale: hovered ? 1.4 : 1,
          opacity: hovered ? 0.6 : 0.35,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      />

      {/* =================================
          OUTER MAGNETIC HALO
      ================================= */}

      <motion.div
        className="cursor-halo"
        style={{
          x: haloX,
          y: haloY,
        }}
        animate={{
          width: hovered ? 82 : 52,
          height: hovered ? 82 : 52,
          rotate: hovered ? 90 : 0,
          opacity: hovered ? 0.9 : 0.55,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 22,
        }}
      >
        <span className="halo-dot halo-dot--top" />
        <span className="halo-dot halo-dot--bottom" />
      </motion.div>

      {/* =================================
          SECOND ORBIT
      ================================= */}

      <motion.div
        className="cursor-orbit cursor-orbit--outer"
        style={{
          x: trailX,
          y: trailY,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span />
      </motion.div>

      {/* =================================
          MAIN SATURN RING
      ================================= */}

      <motion.div
        className="cursor-saturn-ring"
        style={{
          x: coreX,
          y: coreY,
        }}
        animate={{
          scale: pressed
            ? 0.75
            : hovered
              ? 0.9
              : 1,
          rotate: hovered ? -20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 22,
        }}
      />

      {/* =================================
          MAIN GLASS PLANET
      ================================= */}

      <motion.div
        className="cursor-planet"
        style={{
          x: coreX,
          y: coreY,
        }}
        animate={{
          scale: pressed
            ? 0.62
            : hovered
              ? 0.78
              : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 24,
        }}
      >
        <span className="planet-light" />
        <span className="planet-shadow" />
      </motion.div>

      {/* =================================
          CENTER LIGHT
      ================================= */}

      <motion.div
        className="cursor-center"
        style={{
          x: coreX,
          y: coreY,
        }}
        animate={{
          scale: hovered ? 0 : 1,
        }}
      />

      {/* =================================
          HOVER LABEL
      ================================= */}

      <motion.div
        className="cursor-label"
        style={{
          x: haloX,
          y: haloY,
        }}
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.8,
          y: hovered ? 42 : 25,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        EXPLORE
      </motion.div>

    </div>
  );
}