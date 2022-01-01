// Set Initial COunt
let count = 0;

// Selectors
const value = document.querySelector(".counter");
const btns = document.querySelectorAll("button.button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }
    value.textContent = count;
  });
});
