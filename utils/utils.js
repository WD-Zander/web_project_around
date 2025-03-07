// Función para abrir una imagen en el popup
export function openImage(name, link) {
    const closePopupImage = document.querySelector(".popup");
    closePopupImage.classList.add("popup__open");
    const imageElement = closePopupImage.querySelector('.popup__image');
    imageElement.src = link;
    const titleElement = closePopupImage.querySelector('.popup__titel');
    titleElement.textContent = name;
  }
  
  // Función para abrir el modal de agregar tarjeta
  export function openModalCard() {
    const addCarModal = document.querySelector(".form__new-place");
    addCarModal.style.display = "flex";
  }
  
  // Función para cerrar el modal de agregar tarjeta
  export function closeModalCard() {
    const addCarModal = document.querySelector(".form__new-place");
    addCarModal.style.display = "none";
  }
  
  // Función para abrir el modal de edición del perfil
  export function openModal() {
    const formModal = document.querySelector(".form");
    const inputName = document.querySelector(".form__input");
    const inputAbout = document.querySelector(".form__input-about");
    const h1 = document.querySelector(".section__profile-info");
    const h2 = document.querySelector(".section__profile-tag");
  
    formModal.style.display = "flex";
    inputName.value = h1.textContent;
    inputAbout.value = h2.textContent;
  }
  
  // Función para cerrar el modal de edición del perfil
  export function closeModal() {
    const formModal = document.querySelector(".form");
    formModal.style.display = "none";
  }
  
  // Función para cerrar el popup de la imagen
  export function closePopup() {
    const closePopupImage = document.querySelector(".popup");
    closePopupImage.classList.remove("popup__open");
  }
  
  // Función para cerrar modales con la tecla Escape
  export function closeModalOnEscape(event) {
    if (event.key === "Escape") {
      closeModal();
      closeModalCard();
    }
  }
  
  // Función para cerrar los modales si se hace clic fuera de ellos
  export function closeModalOnClickOutside(event) {
    const formModal = document.querySelector(".form");
    const addCarModal = document.querySelector(".form__new-place");
  
    if (event.target === formModal || event.target === addCarModal) {
      closeModal();
      closeModalCard();
    }
  }
  