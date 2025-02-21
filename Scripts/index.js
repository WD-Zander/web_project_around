import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Section from "./Section.js";
import FormValidator from "./FormValidator.js";
import Api from "./Api.js";
import { formConfig } from "./formConfig.js";

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
  const card = new Card(
    items.nameTitle,
    items.urlLink,
    "#template",
    handleCardClick
  ); // Usa nameTitle y urlLink
  const cardElement = card.renderCard();
  section.addItem(cardElement);
}

// 5. Crear la función que se ejecutará cuando se haga clic en una tarjeta
function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

// 6. Crear la instancia de la clase Section
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

// 7. Agregar los event listeners para abrir y cerrar popups
document
  .querySelector(".section__edit")
  .addEventListener("click", () => popupWithFormProfile.open()); // Abre el Formulario del Perfil

document
  .querySelector(".section__button")
  .addEventListener("click", () => popupNewPlace.open()); // Abre el Formulario para nuevas Cards


  // 8. Crear el array initialCards y llenarlo con los datos de la API


  const api = new Api("https://around-api.es.tripleten-services.com/v1", {
    authorization: "dc190778-fc60-4d05-91c2-46d4fb62cf61",
    "Content-Type": "application/json",
  });


  

let initialCards = [];

api.getInitialCards()
  .then((cardsData) => {
    initialCards = cardsData;
    initialCards.forEach((card) => {
      section.renderItems(initialCards);
      console.log(card.name, card.link, card.isLiked);
    });
  })
  .catch((error) => {
    console.error("Error al obtener las tarjetas:", error);
  });

  api.getUserInfo()
  .then((userData) => {
    userInfo.setUserInfo(userData);
    console.log(userData.name, userData.about);

  })
  .catch((error) => {
    console.error("Error al obtener la info:", error);
  });


api.addCard().then((data) => {
  console.log(data);
}).catch((error) => {
  console.error("Error al agregar una tarjeta:", error);
});