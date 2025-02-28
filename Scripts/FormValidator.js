export default class FormValidator {
  constructor(formConfig, formElement) {
    this._formConfig = formConfig;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._formConfig.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._formConfig.submitButtonSelector
    );
  }

  _showInputError(inputElement, errorMessage) {
    console.log(this._formElement);
    console.log(inputElement);
    const errorElement = this._formElement.querySelector(
      
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._formConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._formConfig.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._formConfig.inputErrorClass);
    errorElement.classList.remove(this._formConfig.errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}

