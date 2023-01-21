export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.rednderError();

    this._data = data;
    const markup = this._generateMarkup;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
  <div class="spinner">
          <svg>
            <use href="../../referenceLibrary/images/stoveKnob.png"></use>
          </svg>
        </div>
  `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
        <div>
            <svg>
                <use href="../../referenceLibrary/images/oysters2.png"></use>
            </svg>
            </div>
            <p>${message}</p>
        </div>
        `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
