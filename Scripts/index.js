import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Section from "./Section.js";
import FormValidator from "./FormValidator.js";
import Api from "./Api.js";
import { formConfig } from "./formConfig.js";
import { api } from "./Api.js"

// 1. Crear la instancia de UserInfo (una sola vez)
const userInfo = new UserInfo({
  nameSelector: ".section__profile-info",
  jobSelector: ".section__profile-tag",
});


// 2. Crear las instancias de los popups
const popupWithImage = new PopupWithImage(".popup");
const popupWithFormProfile = new PopupWithForm(
  ".form",
  handleProfileFormSubmit,

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

api.getUserInfo() // Obtiene la información del usuario en el servidor
.then((userData) => {
  userInfo.setUserInfo(userData);
  console.log(userData.name, userData.about);

})
function handleProfileFormSubmit(items) { // Actualiza la información del usuario en el servidor
  api.editUserInfo({name:items.name, about:items.about})
  userInfo.setUserInfo({name:items.name, about:items.about});
 
}
// 4. Crear la función que se ejecutará cuando se envíe el formulario de nueva tarjeta
function handleNewPlaceFormSubmit(items) {
  api.addCard({name:items.nameTitle, link:items.urlLink})
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
      const card = new Card(item.name, item.link, "#template", handleCardClick, item.isLiked, handleLikeClick, item._id);
      const cardElement = card.renderCard();
      section.addItem(cardElement);
    },
  },
  ".cards"
);
function handleLikeClick(id) {
 api.like(id)
 .then((data) => {
   console.log(data);
 })
}

// 7. Agregar los event listeners para abrir y cerrar popups
document
  .querySelector(".section__edit")
  .addEventListener("click", () => popupWithFormProfile.open()); // Abre el Formulario del Perfil

document
  .querySelector(".section__button")
  .addEventListener("click", () => popupNewPlace.open()); // Abre el Formulario para nuevas Cards






let initialCards = [];

api.getInitialCards().then((cardsData) => {
  initialCards = cardsData;
    section.renderItems(initialCards);

});
 