import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
      super(popupSelector);
      this._handleFormSubmit = handleFormSubmit;
      this._form = this._popup.querySelector(".form");
  }

  _getInputValues() {
      // Implementa la lógica para obtener los valores del formulario
      const inputList = this._popup.querySelectorAll('.form__input');
      const inputValues = {};
      inputList.forEach(input => {
          inputValues[input.name] = input.value;
      });
      return inputValues;
  }

  _buttonState(text, disabled) {
      const submitButton = this._popup.querySelector('.submit__button');
      submitButton.textContent = text;
      submitButton.disabled = disabled;
  }

  setEventListeners() {
      super.setEventListeners();

      this._popup.addEventListener("submit", (evt) => {
          evt.preventDefault();
          this._buttonState("Guardando", true);

          this._handleFormSubmit(this._getInputValues(), this._id)
              .finally(() => {
                  this._buttonState("Guardado", false);
                  this.close();
              });

      });
  }

  close() {
      super.close();
      this._popup.reset();
  }

  open(id) {
      super.open();
      this._id = id;
  }
}