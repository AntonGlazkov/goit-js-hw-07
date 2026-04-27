function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  boxes.innerHTML = "";

  let markup = "";

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
  }

  boxes.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const value = Number(input.value);

  if (value < 1 || value > 100) {
    return;
  }

  createBoxes(value);
  input.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);