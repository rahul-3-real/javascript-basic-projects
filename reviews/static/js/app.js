const reviews = [
  {
    id: 1,
    name: "John Doe",
    job: "Web Developer",
    img: "./static/image/person-1.png",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quae iste alias suscipit minus sint molestias reiciendis asperiores, dolores odio fuga ipsa modi sequi fugit placeat! Iusto tempora possimus, repudiandae quis reprehenderit pariatur molestias eum, iure magni praesentium consectetur minima.",
  },
  {
    id: 2,
    name: "Jane Doe",
    job: "Frontend Developer",
    img: "./static/image/person-2.png",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, nostrum tenetur qui delectus nulla officiis tempore assumenda quis, praesentium velit vero ea, ipsum esse. Minus, quae nulla commodi quas delectus iste, illum natus sapiente consectetur omnis, cum officia reiciendis reprehenderit.",
  },
  {
    id: 3,
    name: "John Doe",
    job: "Fullstack Developer",
    img: "./static/image/person-3.png",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quae iste alias suscipit minus sint molestias reiciendis asperiores, dolores odio fuga ipsa modi sequi fugit placeat! Iusto tempora possimus, repudiandae quis reprehenderit pariatur molestias eum, iure magni praesentium consectetur minima.",
  },
  {
    id: 4,
    name: "John Doe",
    job: "Web Designer",
    img: "./static/image/person-4.png",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, nostrum tenetur qui delectus nulla officiis tempore assumenda quis, praesentium velit vero ea, ipsum esse. Minus, quae nulla commodi quas delectus iste, illum natus sapiente consectetur omnis, cum officia reiciendis reprehenderit.",
  },
  {
    id: 5,
    name: "Jane Doe",
    job: "Graphic Designer",
    img: "./static/image/person-5.png",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quae iste alias suscipit minus sint molestias reiciendis asperiores, dolores odio fuga ipsa modi sequi fugit placeat! Iusto tempora possimus, repudiandae quis reprehenderit pariatur molestias eum, iure magni praesentium consectetur minima.",
  },
];

// Select Items
const img = document.querySelector(".img");
const author = document.querySelector(".author");
const position = document.querySelector(".position");
const text = document.querySelector(".description");

const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const randomBtn = document.querySelector(".random-button");

// Set Starting
let currentItem = 0;

// Load Initial Item
window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

// Show Person based on item
const showPerson = () => {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  position.textContent = item.job;
  text.textContent = item.text;
};

// Next Person
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// Next Person
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 1) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// Random Person
randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
