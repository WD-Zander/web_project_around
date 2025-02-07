import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Section from "./Section.js";
import FormValidator from "./FormValidator.js";

// 1. Crear la instancia de UserInfo (una sola vez)
const userInfo = new UserInfo({
  nameSelector: ".section__profile-info",
  jobSelector: ".section__profile-tag",
});

// 2. Crear las instancias de los popups
const popupWithImage = new PopupWithImage(".popup");
const popupWithFormProfile = new PopupWithForm(
  ".form",
  handleProfileFormSubmit
);
const popupNewPlace = new PopupWithForm(
  ".form__new-place",
  handleNewPlaceFormSubmit
);

popupWithImage.setEventListeners();
popupWithFormProfile.setEventListeners();
popupNewPlace.setEventListeners();

const formConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".submit__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form__input_has-error",
  errorClass: "popup__error_visible",
};

const formProfile = document.querySelector("#form__profile"); // Activa la Validacion del Formulario del Perfin
const profileFormValidator = new FormValidator(formConfig, formProfile);
profileFormValidator.enableValidation();

const formNewPlace = document.querySelector("#form__new-place"); //  Activa la Validacion del  Formulario de Nueva Card
const NewPlaceValidator = new FormValidator(formConfig, formNewPlace);
NewPlaceValidator.enableValidation();
///

// 3.   función handleProfileFormSubmit Pasa el array de datos del formulario al método setUserInfo de la instancia de UserInfo
function handleProfileFormSubmit(data) {
  userInfo.setUserInfo(data); //
}
// 4. Crear la función que se ejecutará cuando se envíe el formulario de nueva tarjeta
function handleNewPlaceFormSubmit(items) {
  console.log(items); // Verifica los valores recibidos
  const card = new Card(items.nameTitle, items.urlLink, "#template", handleCardClick); // Usa nameTitle y urlLink
  const cardElement = card.renderCard();
  section.addItem(cardElement);
}


// 4. Crear la función que se ejecutará cuando se haga clic en una tarjeta
function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

// 5. Crear la instancia de la clase Section
const section = new Section(
  {
    renderer: (item) => {
      const card = new Card(item.name, item.link, "#template", handleCardClick);
      const cardElement = card.renderCard();
      section.addItem(cardElement);
    },
  },
  ".cards"
);

// 6. Agregar las tarjetas iniciales
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

section.renderItems(initialCards);

// 7. Agregar los event listeners para abrir y cerrar popups
document
  .querySelector(".section__edit")
  .addEventListener("click", () => popupWithFormProfile.open()); // Abre el Formulario del Perfil

document
  .querySelector(".section__button")
  .addEventListener("click", () => popupNewPlace.open()); // Abre el Formulario para nuevas Cards
