const toggle = document.querySelector("button.button");
const list = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
  //   if (list.classList.contains("hide")) {
  //     list.classList.remove("hide");
  //   } else {
  //     list.classList.add("hide");
  //   }
  list.classList.toggle("hide");
});
