// const btns = document.querySelectorAll("button");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement;
//     question.classList.toggle("active");
//   });
// });

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const btn = card.querySelector("button");
  btn.addEventListener("click", () => {
    cards.forEach((item) => {
      if (item !== card) {
        item.classList.remove("active");
      }
    });
    card.classList.toggle("active");
  });
});
