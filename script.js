const themeToggle = document.getElementById("theme-toggle");

// Check for saved theme preference, or default to dark
const userTheme = localStorage.getItem("theme");
if (userTheme) {
  document.body.setAttribute("data-theme", userTheme);
} else {
  document.body.setAttribute("data-theme", "dark");
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// =========================================
// Smooth Glide Scroll for Navbar Links
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);

    if (!target) return;

    const start = window.scrollY;
    const end = target.offsetTop - 60; // adjust for navbar height
    const duration = 700; // animation speed (ms)

    let startTime = null;

    function easeOutQuad(t) {
      return t * (2 - t); // soft easing
    }

    function animateScroll(timestamp) {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = easeOutQuad(progress);

      window.scrollTo(0, start + (end - start) * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  });
});
// =========================================
// Scroll Reveal Animation
// =========================================

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
