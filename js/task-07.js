const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", () => {
  //console.log(inputEl.value);
  spanEl.style.fontSize = `${inputEl.value}px`;
});
