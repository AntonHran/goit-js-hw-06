const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

function onInputChange(event) {
  const inputValue = event.currentTarget.value;
  //   if (inputValue) {
  //     spanEl.textContent = inputValue;
  //   } else {
  //     spanEl.textContent = "Anonyomus";
  //     }
  spanEl.textContent = inputValue ? inputValue : "Anonymous";
}

inputEl.addEventListener("input", onInputChange);
