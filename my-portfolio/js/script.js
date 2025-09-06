document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const header = document.querySelector("header");

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Add shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
