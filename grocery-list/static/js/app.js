// Select Items
const error = document.querySelector(".error");
const form = document.querySelector("form");
const groceryValue = document.querySelector("#grocery");
const addGrocery = document.querySelector(".add-grocery");
const groceryContainer = document.querySelector(".grocery-container");
const list = document.querySelector(".list");
const clearBtn = document.querySelector(".clear-list-button");

// Edit Option
let editElement;
let editFlag = false;
let editId = "";

// Event Listners
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);

// Functions
function addItem(e) {
  e.preventDefault();

  const value = groceryValue.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    const element = document.createElement("div");
    element.classList.add("item");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
        <p>${value}</p>
        <div class="btns">
            <button class="edit">
                <i class="fal fa-pencil"></i>
            </button>
            <button class="delete">
                <i class="fal fa-trash"></i>
            </button>
        </div>
    `;
    list.appendChild(element);

    // Local Storage
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    console.log("Editing");
  } else {
    error.innerHTML = `<p>Please add the grocery</p>`;
  }
}

// Set back to default
function setBackToDefault() {
  groceryValue.value = "";
  editFlag = false;
  editId = "";
  sub;
}

// Clear Items
function clearItems() {
  const items = document.querySelectorAll(".item");

  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
}

// Local Storage
function addToLocalStorage(id, value) {
  console.log("Local Storage");
}

// Setup Items
