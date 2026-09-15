import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../utils/motionVariants";

/** Thin wrapper so sections don't repeat the same fade-up boilerplate. */
export default function Reveal({
  as = "div",
  variants = fadeUp,
  delay = 0,
  className,
  children,
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
