// tailwind-config.js
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary-fixed-variant": "#5a5c5c",
        "background": "#0e0e0e",
        "primary": "#c6c6c6",
        "secondary": "#9f9d9d",
        "on-surface": "#e7e5e5",
        "on-surface-variant": "#acabaa",
        "surface-container-low": "#131313",
        "outline-variant": "#484848",
        // Agregá acá todos los colores que tenías en el script original
      },
      fontFamily: {
        "headline": ["Noto Serif"],
        "body": ["Inter"],
        "label": ["Inter"]
      },
      borderRadius: { 
        "DEFAULT": "0.125rem", 
        "lg": "0.25rem", 
        "xl": "0.5rem", 
        "full": "0.75rem" 
      },
    },
  },
}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.6,
    rootMargin: "-80px 0px 0px 0px"
  }
);

sections.forEach((section) => observer.observe(section));