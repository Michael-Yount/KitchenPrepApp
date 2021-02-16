"use strict";

// Variables
// THIS IS THE BUTTON FUNCTIONALITY FOR THE MODAL
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
//OVERLAY

const overlay = document.getElementById("overlay");

////  LOAD EVENT LISTNERS  ///;

// Quick List link BUTTONS

openModalButtons.forEach((link) => {
  link.addEventListener("click", () => {
    const modal = document.querySelector(link.dataset.modalTarget);
    openModal(modal);

    console.log("open button is working");
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

//close buttons
closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
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

  foodCostPercent.textContent = `Math.floor(${amount})`;

  console.log(`Submit button pressed ${amount}`);
  e.preventDefault();
});
