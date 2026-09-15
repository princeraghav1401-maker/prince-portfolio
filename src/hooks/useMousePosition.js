import { useEffect, useState } from "react";

/**
 * Tracks the viewport mouse position. Returns null on touch-only devices
 * so consumers (custom cursor, ambient background) can bail out cleanly.
 */
export default function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches
  );

  useEffect(() => {
    const touchQuery = window.matchMedia("(pointer: coarse)");

    const handleTouchChange = (event) => setIsTouch(event.matches);
    touchQuery.addEventListener("change", handleTouchChange);

    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      touchQuery.removeEventListener("change", handleTouchChange);
    };
  }, []);

  return { ...position, isTouch };
}
