// Date
const date = document.querySelector(".date");
date.innerText = new Date().getFullYear();

// Navbar
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// Scroll
const links = document.querySelectorAll("li a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevent Default
    e.preventDefault();

    // Section Selector
    const id = e.target.getAttribute("href").slice(1);
    const target = document.querySelector(`#${id}`);

    target.scrollIntoView();
  });
});
