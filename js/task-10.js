function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let number;

const divEl = document.querySelector("#controls");
const inputEl = divEl.children[0];
const btnCreate = divEl.children[1];
const btnDelete = divEl.children[2];

const divToInput = document.querySelector("#boxes");

function createBox(amount) {
  let divList = [];
  let width = 30;
  let height = 30;
  if (amount >= Number(inputEl.min) && amount <= Number(inputEl.max)) {
    for (let i = 0; i < amount; i += 1) {
      let newDivEl = document.createElement("div");
      newDivEl.classList.add("new-div");
      newDivEl.style.width = `${width}px`;
      newDivEl.style.height = `${height}px`;
      newDivEl.style.backgroundColor = getRandomHexColor();
      divList.push(newDivEl);
      width += 10;
      height += 10;
    }
  }
  return divList;
}

const createDivEl = () => {
  if (number) {
    const elements = createBox(number);
    //console.log(elements);
    divToInput.append(...elements);
    inputEl.value = "";
  }
};

const destroyDivEl = () => {
  divToInput.innerHTML = "";
  //inputEl.value = "";
};

const getAmount = (event) => {
  number = Number(event.currentTarget.value);
  return number;
};

inputEl.addEventListener("change", getAmount);
btnCreate.addEventListener("click", createDivEl);
btnDelete.addEventListener("click", destroyDivEl);
