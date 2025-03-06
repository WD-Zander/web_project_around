import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
import UserInfo from "./UserInfo.js";
import Section from "./Section.js";
import FormValidator from "./FormValidator.js";
import { formConfig } from "./formConfig.js";
import { api } from "./Api.js";

// 1. Crear la instancia de UserInfo (una sola vez)
const userInfo = new UserInfo({
  nameSelector: ".section__profile-info",
  jobSelector: ".section__profile-tag",
  imageProfile: ".section_avatar",
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

const popoupAvatar = new PopupWithForm(".form__avatar", handleAvatarFormSubmit);

const popupDeleteCard = new PopupWithConfirmation(
  ".form__delete",
  (id, cardElement) => {
      // Recibe cardElement como argumento
      return api.deleteCard(id).then(() => {
          cardElement.remove(); // Usa cardElement recibido
          popupDeleteCard.close();
      });
  }
);

popupWithImage.setEventListeners();
popupWithFormProfile.setEventListeners();
popupNewPlace.setEventListeners();
popoupAvatar.setEventListeners();
popupDeleteCard.setEventListeners();

const formProfile = document.querySelector("#form__profile"); // Activa la Validacion del Formulario del Perfin
const profileFormValidator = new FormValidator(formConfig, formProfile);
profileFormValidator.enableValidation();

const formNewPlace = document.querySelector("#form__new-place"); //  Activa la Validacion del  Formulario de Nueva Card
const NewPlaceValidator = new FormValidator(formConfig, formNewPlace);
NewPlaceValidator.enableValidation();

const formAvatar = document.querySelector("#form__avatar");
const newAvatarProfile = new FormValidator(formConfig, formAvatar);
newAvatarProfile.enableValidation();

// 3.   función handleProfileFormSubmit Pasa el array de datos del formulario al método setUserInfo de la instancia de UserInfo

api
  .getUserInfo() // Obtiene la información del usuario en el servidor
  .then((userData) => {
    userInfo.setUserInfo(userData);
  });

function handleProfileFormSubmit(items) {
  // Actualiza la información del usuario en el servidor
  userInfo.setUserInfo({ name: items.name, about: items.about });
  return api.editUserInfo({ name: items.name, about: items.about });
 
}

function handleAvatarFormSubmit(items) {
  userInfo.setUserInfo({ avatar: items.urlLinkavatar });
  return  api.editAvatar({ avatar: items.urlLinkavatar });
  

}

// 4. Crear la función que se ejecutará cuando se envíe el formulario de nueva tarjeta
function handleNewPlaceFormSubmit(items) {
  return api.addCard({ name: items.nameTitle, link: items.urlLink }).then ((data)=> 
    {
      console.log(data)
      const card = new Card(
        data.name,
        data.link,
        "#template",
        handleCardClick,
        data.isLiked,
        handleLikeClick,
        data._id,
        handleDeleteClick
      ); // Usa nameTitle y urlLink
      const cardElement = card.renderCard();
      section.addItem(cardElement);
    } )
}



// 6. Crear la instancia de la clase Section
const section = new Section(
  {
    renderer: (item) => {
      const card = new Card(
        item.name,
        item.link,
        "#template",
        handleCardClick,
        item.isLiked,
        handleLikeClick,
        item._id,
        handleDeleteClick
      );
      const cardElement = card.renderCard();
      section.addItem(cardElement);
    },
  },
  ".cards"
);

function handleDeleteClick(id, cardElement) {
  return popupDeleteCard.open(id, cardElement);
  

}

// 5. Crear la función que se ejecutará cuando se haga clic en una tarjeta
function handleCardClick(name, link) {
 return popupWithImage.open(name, link);
}

function handleLikeClick(id) {
  // Agrega o elimina un like a una tarjeta en el servidor. Usa un if para determinar si el botón tiene la clase card__button_active
  if (
    document
      .querySelector(".card__button")
      .classList.contains("card__button_active")
  ) {
    api.notLike(id);
  }
  api.like(id);
}

// 7. Agregar los event listeners para abrir y cerrar popups
document
  .querySelector(".section__edit")
  .addEventListener("click", () => popupWithFormProfile.open()); // Abre el Formulario del Perfil

document
  .querySelector(".section__button")
  .addEventListener("click", () => popupNewPlace.open()); // Abre el Formulario para nuevas Cards

document
  .querySelector(".pen__image-avatar")
  .addEventListener("click", () => popoupAvatar.open());

let initialCards = [];

api.getInitialCards().then((cardsData) => {
  initialCards = cardsData;
  section.renderItems(initialCards);
});
