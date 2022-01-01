const toggle = document.querySelector(".toggle");
const closeToggle = document.querySelector(".close-toggle");
const sidebar = document.querySelector("aside");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

closeToggle.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
