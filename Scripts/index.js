import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Section from "./Section.js";

// 1. Crear las instancias de los popups
const popupWithImage = new PopupWithImage(".popup");
const popupWithFormProfile = new PopupWithForm(".form", handleProfileFormSubmit);

// 2. Crear la función para manejar el submit del formulario de perfil
function handleProfileFormSubmit(data) {
  const userInfo = new UserInfo({ nameSelector: ".section__profile-info", jobSelector: ".section__profile-tag" });
  userInfo.setUserInfo(data);
}

// 3. Crear la función que se ejecutará cuando se haga clic en una tarjeta
function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

// 4. Crear la instancia de la clase Section
const section = new Section({
  renderer: (item) => {
    const card = new Card(item.name, item.link, "#template", handleCardClick);
    const cardElement = card.renderCard();
    section.addItem(cardElement);
  }
}, ".cards");

// 5. Agregar las tarjetas iniciales
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

// 6. Agregar los event listeners para abrir y cerrar popups
document.querySelector(".section__edit").addEventListener("click", () => popupWithFormProfile.open());
