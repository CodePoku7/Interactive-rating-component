"use strict";

// Submit screen

const btnSubmitEl = document.querySelector(".btn-submit");
const selectionScreen = document.querySelector(".container-submit");
const finishScreen = document.querySelector(".container-finish");

btnSubmitEl.addEventListener("click", function () {
  selectionScreen.classList.add("hidden");
  finishScreen.classList.remove("hidden");
});

// Button selection

const btnsEl = document.getElementsByClassName("rating-container");

const btnNumberEl = document.getElementsByClassName("container-item");

for (let i = 0; i < btnNumberEl.length; i++) {
  btnNumberEl[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

let btnId = "test";

function setRating(clicked_id) {
  const textSelect = document.querySelector(".rating");
  btnId = clicked_id;
  console.log(btnId);
  textSelect.innerHTML = `<div class="paragraph indicator-text">You selected ${btnId} out of 5</div>`;
}

const textHTMLElement = `<div class="paragraph indicator-text">You selected ${btnId} out of 5</div>`;
