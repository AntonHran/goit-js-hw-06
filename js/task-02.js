const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const makeListElements = (list) => {
  return list.map((element) => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = element;
    return liEl;
  });
};

const liElements = makeListElements(ingredients);
ulEl.append(...liElements);
