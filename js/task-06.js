const inputEl = document.querySelector("#validation-input");

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    checkStyleClass("valid", "invalid", inputEl);
  } else {
    checkStyleClass("invalid", "valid", inputEl);
  }
}

function checkStyleClass(classNameTrue, classNameFalase, elem) {
  if (elem.classList.contains(classNameFalase)) {
    elem.classList.remove(classNameFalase);
  }
  if (!elem.classList.contains(classNameTrue)) {
    elem.classList.add(classNameTrue);
  }
}

function checkStyleClass1(classNameTrue, classNameFalase, elem) {
  if (elem.classList.contains(classNameFalase)) {
    elem.classList.replace(classNameFalase, classNameTrue);
  } else {
    elem.classList.add(classNameTrue);
  }
}

function onInputBlur1(event) {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    checkStyleClass1("valid", "invalid", inputEl);
  } else {
    checkStyleClass1("invalid", "valid", inputEl);
  }
}

inputEl.addEventListener("blur", onInputBlur1);
