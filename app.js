"use strict";

// Variables
// THIS IS THE BUTTON FUNCTIONALITY FOR THE MODAL

const openModalButtons = document.querySelectorAll(".btn--show-modal");
const closeModalButtons = document.querySelector(".modal__close-button");
// MODAL
const modal = document.querySelector(".modal");
//OVERLAY
const overlay = document.querySelector(".overlay");

////  LOAD EVENT LISTNERS  ///;

// Quick List link BUTTONS

const openModal = function (e) {
  e.preventDefault();
  console.log("OpenModal");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < openModalButtons.length; ++i)
//   openModalButtons[i].addEventListener("click", openModal);

openModalButtons.forEach((btn) => btn.addEventListener("click", openModal));

overlay.addEventListener("click", closeModal);
// closeModalButtons.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////////
////////////////////  END MODAL FUNCTIONALITY   /////////////

///////////////////  THIS IS THE FOOD COST CALCULATOR
//////////////////////////////////////////////////////

/////////  THESE ARE THE INPUTS
const inventoryStart = document.getElementById("inventoryStart");
const inventoryEnd = document.getElementById("inventoryEnd");
const purchases = document.getElementById("purchases");
const totalSales = document.getElementById("totalSales");
//////////   THIS IS THE SUBMIT BUTTON
const submitButton = document.querySelector(".foodCost__submit");
// THIS IS THE FOOD COST PERCENT OUTPUT
const foodCostPercent = document.querySelector(".foodCost__output");
/////////////  ADD EVENT LISTEner
submitButton.addEventListener("click", function (e) {
  // THIS PROCESSES TO FOOD COST PERCENT

  const amount =
    Number(inventoryStart.value) +
    Number(purchases.value) -
    Number(inventoryEnd.value) / Number(totalSales.value);

  foodCostPercent.textContent = Math.floor(`${amount}`);

  console.log(`Submit button pressed ${amount}`);
  e.preventDefault();
});
