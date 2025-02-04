import Popup from "./Popup.js"; 

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector(".popup__image");
    this._popupCaption = this._popup.querySelector(".popup__titel");
  }

  // Sobreescribimos el método open para añadir imagen y descripción
  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupCaption.textContent = name;

    super.open(); // Llamamos al método open() del padre para abrir el popup
  }
}
