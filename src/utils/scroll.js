/** Smoothly scrolls to a section by id, accounting for the fixed navbar height. */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const navHeight = 84;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;

  window.scrollTo({
    top,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}
