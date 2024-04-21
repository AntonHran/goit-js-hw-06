const registerForm = document.querySelector(".login-form");

const userObj = {
  email: "",
  password: "",
};

function fillObject(emailVal, passwordVal) {
  userObj.email = emailVal;
  userObj.password = passwordVal;
  return userObj;
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (!email || !password) {
    alert("Some field(-s) are not filled!!!");
  } else {
    console.log(fillObject(email, password));
  }
  form.reset();
}

registerForm.addEventListener("submit", handleSubmit);
