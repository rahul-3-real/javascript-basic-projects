const buttons = document.querySelectorAll(".button");
const tabs = document.querySelectorAll(".tab");
const card = document.querySelector(".card");

card.addEventListener("click", (e) => {
  const target = e.target.dataset.target;
  const activeTab = document.querySelector(`#${target}`);
  if (target) {
    // Active Button
    buttons.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // Actuve Tab
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    activeTab.classList.add("active");
  }
});
