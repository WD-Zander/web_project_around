import { 
  openImage, 
  openModalCard, 
  closeModalCard, 
  openModal, 
  closeModal, 
  closePopup, 
  closeModalOnEscape, 
  closeModalOnClickOutside 
} from './utils.js';

import FormValidator from './FormValidator.js';
import Card from './Card.js';

// Datos iniciales de las tarjetas
let initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// Referencias a elementos del DOM
let cardNode = document.querySelector(".cards");

// Función para generar una tarjeta usando la clase Card
function generateCard(name, link) {
  let card = new Card(name, link, ".template");
  return card.renderCard();
}

// Crear tarjetas iniciales
initialCards.forEach(function (elem) {
  let newCard = generateCard(elem.name, elem.link);
  cardNode.prepend(newCard);
});

// Modal para agregar nuevas tarjetas
let newPlaceButton = document.querySelector(".section__button");
newPlaceButton.addEventListener("click", openModalCard);

let addCarModal = document.querySelector(".form__new-place");
addCarModal.addEventListener("submit", function (event) {
  event.preventDefault();
  let nameValue = event.target.nameTitle.value;
  let urlLinks = event.target.urlLink.value;
  
  let newAddCard = generateCard(nameValue, urlLinks);
  cardNode.prepend(newAddCard); 
  closeModalCard();
  addCarModal.reset();
});

// Popup de imagen
let closePopupImage = document.querySelector(".popup");
closePopupImage.addEventListener("click", closePopup);

// Edición del perfil
let editButton = document.querySelector(".section__edit");
let formModal = document.querySelector(".form");
let closeButton = document.querySelector(".form__close");
let inputName = document.querySelector(".form__input");
let h1 = document.querySelector(".section__profile-info");
let h2 = document.querySelector(".section__profile-tag");
let inputAbout = document.querySelector(".form__input-about");

editButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

formModal.addEventListener("submit", function (event) {
  event.preventDefault();
  let getName = inputName.value;
  let aboutMe = inputAbout.value;
  h1.textContent = getName;
  h2.textContent = aboutMe;
  closeModal();
});


// Validación de formularios
let forms = document.querySelectorAll('.form');
forms.forEach((formElement) => {
  let formValidator = new FormValidator({
      formSelector: ".form",
      inputSelector: ".form__input",
      submitButtonSelector: ".submit__button",
      inactiveButtonClass: "popup__button_disabled",
      inputErrorClass: "form__input_has-error",
      errorClass: "popup__error_visible"
  }, formElement);

  formValidator.enableValidation();
});

// Cerrar modales con la tecla Escape
document.addEventListener("keydown", closeModalOnEscape);

// Cerrar modales al hacer clic fuera de ellos
window.addEventListener("click", closeModalOnClickOutside);



