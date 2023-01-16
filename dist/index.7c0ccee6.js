"use strict";
//this is an npm package
//import icons from "../KitchenPrepApp/referenceLibrary/images";
//console.log(icons);
//import "core-js/stable";
//import "regenerator-runtime/runtime";
// Variables
// THIS IS THE BUTTON FUNCTIONALITY FOR THE MODAL
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-modal-target]");
//OVERLAY
const overlay = document.querySelector(".overlay");
openModalButtons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        const modal1 = document.querySelector(btn.dataset.modalTarget);
        openModal(modal1);
    });
});
closeModalButtons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        const modal1 = btn.closest(".modal");
        closeModal(modal1);
    });
});
function openModal(modal1) {
    if (modal1 == null) return;
    modal1.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
function closeModal(modal1) {
    if (modal1 == null) return;
    modal1.classList.add("hidden");
    overlay.classList.add("hidden");
}
overlay.addEventListener("click", ()=>{
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal1)=>{
        closeModal(modal1);
    });
});
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
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
submitButton.addEventListener("click", function(e) {
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
tabsContainer.addEventListener("click", function(e) {
    const clicked = e.target.closest(".operations__tab");
    ///////   GUARD CLAUSE
    if (!clicked) return;
    ////// REMOVE ACTIVE CLASSES
    tabs.forEach((t)=>t.classList.remove("operations__tab--active"));
    tabsContent.forEach((c)=>c.classList.remove("operations__content--active"));
    /////    ACTIVATE TAB
    clicked.classList.add("operations__tab--active");
    //// ACTIVE CONTENT AREA
    console.log(clicked.dataset.tab);
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active");
});
//// MENU FADE ANIMATION
// const nav = document.querySelector('.nav')
// This is the code for the recipes section
const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
//////////////////////////////////////////////
/////////////  API   ////////////////////////
///////////////////////////////////////////
const renderSpinner = function(parentEl) {
    const markup = `
  <div class="spinner">
          <svg>
            <use href="../KitchenPrepApp/referenceLibrary/images/stoveKnob.png"></use>
          </svg>
        </div>
  `;
    parentEl.innerHTML = "";
    parentEl.insertAdjacentHTML("afterbegin", markup);
};
const showRecipe = async function() {
    try {
        const id = window.location.hash.slice(1);
        //1 loading recipe , spinner
        renderSpinner(recipeContainer);
        const res = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/${id}");
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        let { recipe  } = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        console.log(recipe);
        // rendering the recipe
        const markup = `<figure class="recipe__fig">
          <img src="${recipe.img}" alt="${recipe.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="src/img/icons.svg#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="src/img/icons.svg#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${recipe.ingredients.map((ing)=>{
            return `
              <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
              </div>
            </li>
              
              `;
        }).join("")}
            

            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">0.5</div>
              <div class="recipe__description">
                <span class="recipe__unit">cup</span>
                ricotta cheese
              </div>
            </li>
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${recipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `;
        recipeContainer.innerHTML = "";
        recipeContainer.insertAdjacentHTML("afterbegin", markup);
    } catch (err) {
        alert(err);
    }
};
[
    "hashchange",
    "load"
].forEach((e)=>window.addEventListener(ev, showRecipe)); //window.addEventListener("hashChange", showRecipe);
 //window.addEventListener("load", showRecipe);

//# sourceMappingURL=index.7c0ccee6.js.map
