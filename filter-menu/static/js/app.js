// Artists
const artists = [
  {
    id: 1,
    name: "One Direction",
    filter: "One Direction",
    img: "./static/image/1d-1.jpg",
  },
  {
    id: 2,
    name: "Ariana Grande",
    filter: "Ariana Grande",
    img: "./static/image/ariana-1.jpg",
  },
  {
    id: 3,
    name: "Sia",
    filter: "Sia",
    img: "./static/image/sia-1.jpg",
  },
  {
    id: 4,
    name: "Ariana Grande",
    filter: "Ariana Grande",
    img: "./static/image/ariana-2.jpg",
  },
  {
    id: 5,
    name: "Ariana Grande",
    filter: "Ariana Grande",
    img: "./static/image/ariana-3.jpg",
  },
  {
    id: 6,
    name: "Sia",
    filter: "Sia",
    img: "./static/image/sia-2.jpg",
  },
  {
    id: 7,
    name: "One Direction",
    filter: "One Direction",
    img: "./static/image/1d-2.jpg",
  },
  {
    id: 8,
    name: "One Direction",
    filter: "One Direction",
    img: "./static/image/1d-3.jpg",
  },
  {
    id: 9,
    name: "Sia",
    filter: "Sia",
    img: "./static/image/sia-3.jpg",
  },
  {
    id: 10,
    name: "Sia",
    filter: "Sia",
    img: "./static/image/sia-4.jpg",
  },
  {
    id: 11,
    name: "Ariana Grande",
    filter: "Ariana Grande",
    img: "./static/image/ariana-4.jpg",
  },
];

// Selector
const container = document.querySelector(".grid");
const btnContainer = document.querySelector(".button-group");

// Load Items
window.addEventListener("DOMContentLoaded", () => {
  displayItem(artists);

  displayBtns();
});

// Item Element
const displayItem = (menuItems) => {
  let items = menuItems.map((item) => {
    return `
    <div class="item">
        <div class="image">
            <img src="${item.img}" alt="${item.name}" />
        </div>
    </div>
    `;
  });
  items = items.join("");
  container.innerHTML = items;
};

const displayBtns = () => {
  const categories = artists.reduce(
    (values, item) => {
      if (!values.includes(item.filter)) {
        values.push(item.filter);
      }
      return values;
    },
    ["All"]
  );
  const categorieBtns = categories
    .map((category) => {
      return `
            <button class="button" data-filter="${category}">
            ${category}
            </button>
            `;
    })
    .join("");
  btnContainer.innerHTML = categorieBtns;
  const filterBtns = document.querySelectorAll(".button");

  // Filter Item
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const filter = e.currentTarget.dataset.filter;
      const menuFilter = artists.filter((menuItem) => {
        if (menuItem.filter == filter) {
          return menuItem;
        }
      });
      if (filter == "All") {
        displayItem(artists);
      } else {
        displayItem(menuFilter);
      }
    });
  });
};
