import Popup from "./Popup.js"; 

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".form");
    
  }

  // Método privado para obtener los valores de los inputs
  _getInputValues() {
    const formValues = {};
    this._inputList.forEach(input => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  // Modificamos setEventListeners para agregar evento submit al formulario
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close(); // Cierra el popup después de enviar el formulario
    });
  }

  // Modificamos close() para restablecer el formulario al cerrarlo
  close() {
    super.close();
    this._form.reset();
  }
}
