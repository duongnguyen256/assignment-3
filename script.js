"use strict";

// Chức năng hiện Email
function submitEmail() {
  const email = document.getElementById("emailInput").value;
  const errorMessage = document.getElementById("errorMessage");
  const infoForm = document.getElementById("infoForm");
  const personalInfo = document.getElementById("personalInfo");

  if (validateEmail(email)) {
    infoForm.classList.add("hide");
    personalInfo.classList.remove("hide");
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Please enter a valid email address.";
  }
}

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Chức năng hiện Info-1
const infoShow = document.querySelectorAll(".info-form");
const btnShowMore = document.querySelectorAll(".show-more");
const btnShowLess = document.querySelector(".show-less");
// const openInfoShow =
// const closeInfoShow = function () {
//   infoShow[i].classList.add("hide");
//   btnShowLess[i].classList.add("hide");
//   btnShowMore[i].classList.remove("hide");
// };

console.log(infoShow);
console.log(btnShowMore);
console.log(btnShowLess);

for (let i = 0; i < btnShowMore.length; i++)
  btnShowMore[i].addEventListener("click", function () {
    infoShow[i].classList.remove("hide");
    btnShowLess[i].classList.remove("hide");
    btnShowMore[i].classList.add("hide");
  });

btnShowLess[i].addEventListener("click", function () {
  infoShow[i].classList.add("hide");
  btnShowLess[i].classList.add("hide");
  btnShowMore[i].classList.remove("hide");
});

// btnShowLess[i].addEventListener("click", closeInfoShow);

// document.querySelectorAll(".show-more").addEventListener("click", function () {
//   infoShow.classList.remove("hide");
//   showLess.classList.add("hide");
// });

// document.querySelectorAll(".show-less").addEventListener("click", function () {
//   infoShow.classList.add("hide");
//   showMore.classList.remove("hide");
// });
