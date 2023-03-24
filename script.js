"use strict";

const btn = document.querySelector("button");
const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  validate(fname);
  validate(lname);
  validate(email);

  validate(password);
});

function validate(input) {
  if (input.value == "") {
    input.parentElement.classList.remove("input-box");
    input.parentElement.classList.add("error-state");
  } else {
    input.parentElement.classList.add("input-box");
    input.parentElement.classList.remove("error-state");
  }
}
