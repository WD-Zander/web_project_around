export default class   Card {
    constructor(name, link, templateSelector) {
      this._name = name;
      this._link = link;
      this._templateSelector = templateSelector;
    }
  
    // Método privado para obtener la plantilla de la tarjeta
    _getTemplate() {
      const cardTemplate = document.querySelector(this._templateSelector);
      return cardTemplate.content.querySelector(".card").cloneNode(true);
    }
  
    // Método privado para añadir eventos
    _setEventListeners(cardElement) {
      const showImage = cardElement.querySelector(".card__image");
      const removeCardButton = cardElement.querySelector(".card__trash");
      const likeButton = cardElement.querySelector(".card__button");
  
      showImage.addEventListener("click", () => this._openImage());
      removeCardButton.addEventListener("click", () => this._removeCard(cardElement));
      likeButton.addEventListener("click", (evt) => this._toggleLike(evt));
    }
  
    // Método privado para abrir la imagen en el popup
    _openImage() {
      const popup = document.querySelector(".popup");
      const imageElement = popup.querySelector(".popup__image");
      const titleElement = popup.querySelector(".popup__titel");
  
      imageElement.src = this._link;
      titleElement.textContent = this._name;
      imageElement.alt = this._name;
      
      popup.classList.add("popup__open");
    }
  
    // Método privado para eliminar la tarjeta
    _removeCard(cardElement) {
      cardElement.remove();
    }
  
    // Método privado para alternar el estado de like
    _toggleLike(evt) {
      evt.target.classList.toggle('card__button_active');
    }
  
    // Método público para renderizar la tarjeta
    renderCard() {
      const cardElement = this._getTemplate();
      cardElement.querySelector(".card__image").src = this._link;
      cardElement.querySelector(".card__titel").textContent = this._name;
      this._setEventListeners(cardElement);
  
      return cardElement;
    }
  }
  