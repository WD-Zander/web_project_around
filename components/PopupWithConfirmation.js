import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, deleteFunction) {
    super(popupSelector);
    this._delete = deleteFunction;  // Asegúrate de que deleteFunction devuelva una promesa
    this._submitButton = this._popup.querySelector('.submit__button');
 
  }

  open(elementId, handlerOnDelete, cardElement) {
    super.open();
    this._elementId = elementId;
    this._handlerOnDelete = handlerOnDelete;
    this._cardElement = cardElement;
  }

  _updateButtonState(text, disabled) {
    this._submitButton.textContent = text;
    this._submitButton.disabled = disabled;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener('click', () => {
      this._updateButtonState('Borrando...', true);

      // Asegúrate de que this._delete retorne una promesa
      this._delete(this._elementId, this._handlerOnDelete, this._cardElement)
        .finally(() => {
          console.log('Borrado');
          this._updateButtonState('Borrar', false);
        });
    });
  }
}
