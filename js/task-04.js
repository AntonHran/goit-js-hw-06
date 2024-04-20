let counterValue = 0;

const ref = {
  btnIncrementEl: document.querySelector("[data-action='increment']"),
  btnDecrementEl: document.querySelector("[data-action='decrement']"),
  spanEl: document.querySelector("#value"),
};

// const btnIncrementEl = document.querySelector("[data-action='increment']");
// console.log(btnIncrementEl);
// const btnDecrementEl = document.querySelector("[data-action='decrement']");
// const spanEl = document.querySelector("#value");

const increase = () => {
  counterValue += 1;
  ref.spanEl.textContent = counterValue;
};

ref.btnIncrementEl.addEventListener("click", increase);

// const decrease = () => {
//   counterValue -= 1;
//   spanEl.textContent = counterValue;
// };

// btnDecrementEl.addEventListener("click", decrease);

ref.btnDecrementEl.addEventListener("click", () => {
  counterValue -= 1;
  ref.spanEl.textContent = counterValue;
});
