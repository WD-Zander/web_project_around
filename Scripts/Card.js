export default class Card {
  constructor(name, link, templateSelector, handleCardClick, isLiked, handleLikeClick, _id , handleDeleteClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;  // Función para manejar el click en la tarjeta
    this._isLike = isLiked
    this._handleLikeClick = handleLikeClick;  // Función para manejar el click en el botón de like
    this._id = _id
    this._handleDeleteClick = handleDeleteClick;  // Función para manejar el click en el botón de eliminar

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

    showImage.addEventListener("click", () => this._handleCardClick(this._name, this._link));
    removeCardButton.addEventListener("click", () => this._handleDeleteClick(this._id, cardElement));
    likeButton.addEventListener("click", (evt) => this._toggleLike(evt));
  }

  // Método privado para eliminar la tarjeta
  removeCard(cardElement) {
    this._handleDeleteClick(this._id, cardElement); // Llama a la función para manejar el click en el botón de eliminar y le pasa el id de la tarjeta
  }

  // Método privado para alternar el estado de like
  _toggleLike(evt) {
    evt.target.classList.toggle('card__button_active');
    this._handleLikeClick(this._id);

  }

  // Método público para renderizar la tarjeta
  renderCard() {
    const cardElement = this._getTemplate();
    cardElement.querySelector(".card__image").src = this._link;
    cardElement.querySelector(".card__titel").textContent = this._name;
    this._setEventListeners(cardElement);
    if(this._isLike) {	
      cardElement.querySelector('.card__button').classList.add('card__button_active');
    }
   else {
        cardElement.querySelector('.card__button').classList.remove('card__button_active');
    }
   return cardElement;
  }
}
