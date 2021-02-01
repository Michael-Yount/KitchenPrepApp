"use strict";

// Variables
// THIS IS THE BUTTON FUNCTIONALITY FOR THE MODAL
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
//OVERLAY

const overlay = document.getElementById("overlay");

////  LOAD EVENT LISTNERS  ///

// loadEventListeners();

// function loadEventListeners('submit', addPrep);

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

/////////////  ADD EVENT LISTENERS
submitButton.addEventListener("click", () => {
  let usage = (inventoryStart.value + purchases.value - inventoryEnd.value) / totalSales;
  console.log(`submit is working ${usage}`);
});

// submitButton.addEventListener("click", () => {
//     const foodCost = inventoryStart.value + purchases.value;
//     console.log(foodCost)
// });

//     console.log("Submit is working");
//     let foodCostPercent =
//       inventoryStart.value + purchases.value - inventoryEnd.value;
//     let foodCost = totalSales.value / foodCostPercent;
//     // let foodPercent = (sales / foodCostPercent);

//     console.log(foodCost);
//   });
