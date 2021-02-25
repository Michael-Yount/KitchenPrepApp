"use strict";

// Variables
// THIS IS THE BUTTON FUNCTIONALITY FOR THE MODAL

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-modal-target]"
);

//OVERLAY
const overlay = document.querySelector(".overlay");

openModalButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = document.querySelector(btn.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////  END MODAL FUNCTIONALITY   /////////////

///////////////////  THIS IS THE FOOD COST CALCULATOR

// /////////  THESE ARE THE INPUTS
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
