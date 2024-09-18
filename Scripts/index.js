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

// Genero una Funcion  (generateCards) donde tomo los parametros Link y Name de Arrive

///////////////////////////////////

function openImage(name, link) {

  closePopupImage.classList.add("popup__open");

  const imageElement = closePopupImage.querySelector('.card__image');
  imageElement.src= link;
  const titleElement = closePopupImage.querySelector('.card__titel');
  titleElement.textContent= name;
 
}
function generateCard(name, link) {
  const cardTemplate = document.querySelector(".template"); // Creo una variable que toma la clase .template deon DOM
  const createCard = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true); // Clono del Dom el contenido de complete de Card
  const showImage = createCard.querySelector(".card__image");

  showImage.addEventListener("click", function (event) {
    //Agrega una nueva tarjeta //

   openImage(name, link); // Llamo a la Funcion que Genera las Cards y le paso 2 Parametros  (nameValue, urlLinks)
  });

  showImage.src = link; // Selecciono los Parametros  link = Url
  createCard.querySelector(".card__titel").textContent = name; // name Titulo
  return createCard;
}


/////////////////////////////////////

initialCards.forEach(function (elem) {
  // Creo un loop donde el forecah pasara por cada uno de los elemenos del arrive
  const newCard = generateCard(elem.name, elem.link); //Creo una variable newCard que llamara a la Funcion generateCard pasandole los parametros name y link para que rrecorran cada uno de sus elemenstos
  cardNode.prepend(newCard);
});

let newPlaceButton = document.querySelector(".section__button");
let addCarModal = document.querySelector(".form__new-place");
let urlImage = document.querySelector("#urlLink");
let textImage = document.querySelector("form__fild--place");
let closeAddCarModal = document.querySelector(".form__close-place");

// Trabajamos con el Modal que sera usado para abrir las tarjetas
function openModalCard() {
  addCarModal.style.display = "flex";
}
newPlaceButton.addEventListener("click", openModalCard);

function closeModalCard() {
  addCarModal.style.display = "none";
}

function closePopup() {
  closePopupImage.classList.remove("popup__open");
}
closeAddCarModal.addEventListener("click", closeModalCard);

closePopupImage.addEventListener("click", closePopup);

addCarModal.addEventListener("submit", function (event) {
  //Agrega una nueva tarjeta //
  event.preventDefault();
  const nameValue = event.target.nameTitle.value; //Busco de forma directa en el Form Evento > Target > Nombre del imput > .Valor
  const urlLinks = event.target.urlLink.value; //Busco de forma directa en el Form Evento > Target > Nombre del imput > .Valor
  const newAddCard = generateCard(nameValue, urlLinks); // Llamo a la Funcion que Genera las Cards y le paso 2 Parametros  (nameValue, urlLinks)
  cardNode.prepend(newAddCard); // Agrega la tarjeta al Inicio
  closeModalCard();
  addCarModal.reset(); // Resetea el Formulario
});

 

let editButton = document.querySelector(".section__edit");
let formModal = document.querySelector(".form");
let closeButton = document.querySelector(".form__close");
let form = document.querySelector(".form");

let inputName = document.querySelector(".form__input");
let h1 = document.querySelector(".section__profile-info");
let h2 = document.querySelector(".section__profile-tag");
let inputAbout = document.querySelector(".form__input-about");

let buttonColor = document.querySelector(".submit__button");

function openModal() {
  formModal.style.display = "flex";
  inputName.value = h1.textContent;
  inputAbout.value = h2.textContent;
  buttonColor.style.backgroundColor = "#FFFFFF";
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

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let getName = inputName.value;
  let aboutMe = inputAbout.value;
  h1.textContent = getName;
  h2.textContent = aboutMe;
  closeModal();
});

inputName.addEventListener("input", changeButtonColor);
inputAbout.addEventListener("input", changeButtonColor);
