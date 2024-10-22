//Sprint 8



const initialCards = [
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

const cardNode = document.querySelector(".cards"); // Selecciono del DOM la Clase .Cards
let closePopupImage = document.querySelector(".popup");

// Funciones

function openImage(name, link) {
  closePopupImage.classList.add("popup__open");
  const imageElement = closePopupImage.querySelector('.popup__image');
  imageElement.src = link;
  const titleElement = closePopupImage.querySelector('.popup__titel');
  titleElement.textContent = name;
}

function generateCard(name, link) {
  const cardTemplate = document.querySelector(".template"); // Creo una variable que toma la clase .template de DOM
  const createCard = cardTemplate.content.querySelector(".card").cloneNode(true); // Clono del Dom el contenido de complete de Card
  const showImage = createCard.querySelector(".card__image");

  showImage.addEventListener("click", function (event) {
    openImage(name, link); // Llamo a la Funcion que Genera las Cards
  });

  const removeCard = createCard.querySelector(".card__trash"); // Declaro la Variable
  removeCard.addEventListener('click', function () {
    createCard.remove(); // ELIMINA LA TARJETA SELECCIONADA
  });

  createCard.querySelector('.card__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__button_active'); // Cambia el estado del botón
  });

  showImage.src = link; // Selecciono los Parametros
  createCard.querySelector(".card__titel").textContent = name; // name Titulo
  return createCard;
}

// Fin de Generar Tarjeta

initialCards.forEach(function (elem) {
  const newCard = generateCard(elem.name, elem.link); // Creo una variable newCard
  cardNode.prepend(newCard);
});

// Modal para agregar nuevas tarjetas

let newPlaceButton = document.querySelector(".section__button");
let addCarModal = document.querySelector(".form__new-place");
let closeAddCarModal = document.querySelector(".form__close-place");

function openModalCard() {
  addCarModal.style.display = "flex";
}
newPlaceButton.addEventListener("click", openModalCard);

function closeModalCard() {
  addCarModal.style.display = "none";
}

addCarModal.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameValue = event.target.nameTitle.value; // Busco el nombre
  const urlLinks = event.target.urlLink.value; // Busco la URL
  const newAddCard = generateCard(nameValue, urlLinks); // Llamo a la Funcion que Genera las Cards
  cardNode.prepend(newAddCard); // Agrega la tarjeta al Inicio
  closeModalCard();
  addCarModal.reset(); // Resetea el Formulario
});

// Popup de imagen

function closePopup() {
  closePopupImage.classList.remove("popup__open");
}
closePopupImage.addEventListener("click", closePopup);

// Edición del perfil

let editButton = document.querySelector(".section__edit");
let formModal = document.querySelector(".form");
let closeButton = document.querySelector(".form__close");
let inputName = document.querySelector(".form__input");
let h1 = document.querySelector(".section__profile-info");
let h2 = document.querySelector(".section__profile-tag");
let inputAbout = document.querySelector(".form__input-about");
let buttonColor = document.querySelector(".submit__button");

function openModal() {
  formModal.style.display = "flex";
  inputName.value = h1.textContent;
  inputAbout.value = h2.textContent;
 // buttonColor.style.backgroundColor = "#FFFFFF";
}

function closeModal() {
  formModal.style.display = "none";
}

function changeButtonColor() {
  buttonColor.style.backgroundColor = "#000000";
}

editButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  if (event.target === formModal || event.target === addCarModal) {
    closeModal() || closeModalCard();
  }
});

formModal.addEventListener("submit", function (event) {
  event.preventDefault();
  h1.textContent = inputName.value;
  h2.textContent = inputAbout.value;
  closeModal();
});

//inputName.addEventListener("input", changeButtonColor);
//inputAbout.addEventListener("input", changeButtonColor);

document.addEventListener("keydown", function (event) {
  // Esto Escuha el documento completo "document.addEventListener"
  if (event.key === "Escape") {
    closeModal();
    closeModalCard();
  }
});

//Cierre de Tarjeta New Place

const formNewPlace = document.querySelector(".form__new-place");
const closeAllForms = document.getElementById("closeNewPlace");
closeAllForms.addEventListener("click", closeForms);
function closeForms() {
  console.log("holacocacola");
  formNewPlace.style.display = "none";
   
}
