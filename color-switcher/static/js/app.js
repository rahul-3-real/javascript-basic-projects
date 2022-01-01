const colors = [
  "#e53935",
  "#d81b60",
  "#9c27b0",
  "#5e35b1",
  "#3949ab",
  "#1e88e5",
  "#00acc1",
  "#00897b",
  "#4caf50",
  "#7cb342",
  "#c0ca33",
  "#fdd835",
  "#ffb300",
  "#fb8c00",
  "#ff5722",
  "#6d4c41",
  "#757575",
  "#546e7a",
];

const btn = document.querySelector("button.button");
const color = document.querySelector(".color");
const section = document.querySelector("section");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  section.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

const getRandomNumber = () => Math.floor(Math.random() * colors.length);

// Hex Color Generator
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const hexBtn = document.querySelector("button.button");
const hexText = document.querySelector(".color");
const hexSection = document.querySelector("section");

hexBtn.addEventListener("click", () => {
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    hexColor += hex[getRandomHexCode()];
  }
  section.style.backgroundColor = hexColor;
  hexText.textContent = hexColor;
});

const getRandomHexCode = () => Math.floor(Math.random() * hex.length);
