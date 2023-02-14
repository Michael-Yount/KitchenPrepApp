import View from "./View";

// TODO add fraction to import

class RecipeView extends View {
  _parentElement = document.querySelector(".recipe");
  _errorMessage = "We could not find that recipe, Please try another one!";
  _message = "";

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  _generateMarkup() {
    return `<figure class="recipe__fig">
        //removed
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="/referenceLibrary/logos/kitchenPrepAppFavicon.ico"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${
              this._data.cookingTime
            }</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="/referenceLibrary/logos/KPALOGO.png"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${
              this._data.servings
            }</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="/referenceLibrary/logos/kitchenPrepAppFavicon.ico"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="/referenceLibrary/logos/kitchenPrepAppFavicon.ico"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="/referenceLibrary/logos/kitchenPrepAppFavicon.ico"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="/referenceLibrary/logos/kitchenPrepAppFavicon.ico"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._data.ingredients
              .map((ing) => {
                return `
              <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="/referenceLibrary/logos/kitchenPrepAppFavicon.ico"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
              </div>
            </li>
              
              `;
              })
              .join("")}
            

            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="/referenceLibrary/logos/kitchenPrepAppFavicon.ico"></use>
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
            <span class="recipe__publisher">${
              this._data.publisher
            }</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="/referenceLibrary/logos/kitchenPrepAppFavicon.ico"></use>
            </svg>
          </a>
        </div>
    `;
  }
}

export default new RecipeView();
