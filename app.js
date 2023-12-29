"use strict";

const navToggle = document.querySelector(".tog");
const navPop = document.querySelector("#nav_click");
const extension = document.querySelector(".extension");
const closeMarginLeft = document.querySelectorAll(".margin_left");
const cancel = document.querySelector('[aria-label="cancel"]');

function clik() {
  if (navPop.style.display === "") {
    navPop.style.display = "block";
  } else {
    navPop.style.display = "";
  }
}

function noDisplay() {
  extension.style.display = "none";
}

function closeDisplay() {
  navPop.style.display = "none";
}

navToggle.addEventListener("click", clik);

closeMarginLeft.forEach((element) => {
  element.addEventListener("click", closeDisplay);
});

cancel.addEventListener("click", noDisplay);
  