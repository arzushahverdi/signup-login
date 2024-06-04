//~ sign up

const signup_form = document.querySelector(".signup_form");
const signup_email = document.querySelector(".signup_email");
const signup_password = document.querySelector(".signup_password");
const signup_password2 = document.querySelector(".signup_password2");
const signupButton = document.querySelector(".signupButton");

let registeredEmails = [];
let registeredPassword = [];

signup_form.addEventListener("submit", function (e) {
  e.preventDefault();
  validInput();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.textContent = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.textContent = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (signup_email) => {
  const rejex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return rejex.test(String(signup_email).toLowerCase());
};

const validInput = () => {
  const signup_emailValue = signup_email.value.trim();
  const signup_passwordValue = signup_password.value.trim();
  const signup_password2Value = signup_password2.value.trim();

  if (signup_emailValue === "") {
    setError(signup_email, "Email can't be empty");
  } else if (!isValidEmail(signup_emailValue)) {
    setError(signup_email, "Provide a valid email address");
  } else {
    setSuccess(signup_email);
  }

  if (signup_passwordValue === "") {
    setError(signup_password, "Password can't be empty");
  } else if (
    signup_passwordValue.length > 8 ||
    signup_passwordValue.length < 8
  ) {
    setError(signup_password, "Password must be 8 characters");
  } else {
    setSuccess(signup_password);
  }

  if (signup_password2Value === "") {
    setError(signup_password2, "Password can't be empty");
  } else if (
    signup_password2Value.length > 8 ||
    signup_password2Value.length < 8
  ) {
    setError(signup_password2, "Password must be 8 characters");
  } else if (signup_passwordValue !== signup_password2Value) {
    setError(signup_password2, "Passwords didn't same");
  } else {
    setSuccess(signup_password2);
  }

  if (
    signup_emailValue !== "" &&
    signup_passwordValue !== "" &&
    signup_password2Value !== ""
  ) {
    localStorage.setItem("signup_email", signup_emailValue);
    localStorage.setItem("signup_password", signup_passwordValue);
    localStorage.setItem("signup_password2", signup_password2Value);
  }

  registeredEmails.push(signup_emailValue);
  registeredPassword.push(signup_passwordValue);

  // signupButton.addEventListener("click", function () {
  //   if (
  //     registeredEmails.includes(signup_emailValue) &&
  //     registeredPassword.includes(signup_passwordValue)
  //   ) {
  //     alert("Registration successful!");
  //     return;
  //   }
  // });
};

//~ log in

const login_form = document.querySelector(".login_form");
const login_email = document.querySelector(".login_email");
const login_password = document.querySelector(".login_password");
const loginButton = document.querySelector(".loginButton");

let loginEmails = [];
let loginPassword = [];

login_form.addEventListener("submit", function (e) {
  e.preventDefault();
  validinput();
});

const seterror = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.textContent = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setsuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.textContent = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isvalidEmail = (login_email) => {
  const rejex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return rejex.test(String(login_email).toLowerCase());
};

const validinput = () => {
  const login_emailValue = login_email.value.trim();
  const login_passwordValue = login_password.value.trim();

  if (login_emailValue === "") {
    seterror(login_email, "Email can't be empty");
  } else if (!isValidEmail(login_emailValue)) {
    seterror(login_email, "Provide a valid email address");
  } else {
    setsuccess(login_email);
  }

  if (login_passwordValue === "") {
    seterror(login_password, "Password can't be empty");
  } else if (login_passwordValue.length > 8 || login_passwordValue.length < 8) {
    seterror(login_password, "Password must be 8 characters");
  } else {
    setsuccess(login_password);
  }

  if (login_emailValue !== "" && login_passwordValue !== "") {
    localStorage.setItem("login_email", login_emailValue);
    localStorage.setItem("login_password", login_passwordValue);
  }

  loginEmails.push(login_emailValue);
  loginPassword.push(login_passwordValue);

  console.log(loginEmails, "loginemail");
  console.log(registeredEmails, "registeredemail");
  console.log(loginPassword, "loginpassword");
  console.log(registeredPassword, "registerpassword");
};

// loginButton.addEventListener("click", function () {
//   if (!loginEmails.includes(registeredEmails)) {
//     alert("Not registered. Please register first.");
//     return;
//   }

//   if (!loginPassword.includes(registeredPassword)) {
//     alert("Wrong password!");
//     return;
//   }
// });
