const themeToggle = document.getElementById("theme-toggle");

// Save user theme preference
const userTheme = localStorage.getItem("theme");
if (userTheme) document.body.setAttribute("data-theme", userTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
