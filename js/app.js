"use strict";

//import * as model from "./model";
//import recipeView from "./views/recipeView";
//import searchView from "./views/searchView";
//import resultsView from "./views/resultsView";
//import "./core-js/stable";
//import "regenerator-runtime/runtime";
//import { async } from "regenerator-runtime";

//if (module.hot) {
//  module.hot.accept();
//}

// Variables
// THIS IS THE BUTTON FUNCTIONALITY FOR THE MODAL

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll(
  "[data-close-modal-target]"
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
  const invTotal = Number(inventoryStart.value) + Number(purchases.value);
  const invMinusWeek = invTotal - Number(inventoryEnd.value);
  const amount = invMinusWeek / Number(totalSales.value);

  foodCostPercent.textContent = Math.abs(`${amount}`).toPrecision(2);

  console.log(invTotal);
  console.log(`Submit button pressed ${amount}`);
  e.preventDefault();
});

////////////////////////////////////////////////////////////////

////////////////////          TAB ELEMENTS

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  ///////   GUARD CLAUSE
  if (!clicked) return;

  ////// REMOVE ACTIVE CLASSES
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  /////    ACTIVATE TAB
  clicked.classList.add("operations__tab--active");

  //// ACTIVE CONTENT AREA

  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//// MENU FADE ANIMATION

//const nav = document.querySelector(".nav");

// This is the code for the recipes section

//const recipeContainer = document.querySelector(".recipe");

//////////////////////////////////////////////
/////////////Recipe  API   ////////////////////////
///////////////////////////////////////////

/*const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //1 loading recipe , spinner
    await model.loadRecipe(id);

    // rendering the recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    recipeView.renderSpinner();
    // get search query
    const query = searchView.getQuery();
    if (!query) return;

    // Load search results
    await model.loadSearchResults(query);

    resultsView.render(model.state.search.results);

    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();*/
