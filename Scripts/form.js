let editButton = document.querySelector(".section__edit");

let formModal = document.querySelector(".form");

let closeButton = document.querySelector(".form__close");

function openModal() {
  formModal.style.display = "flex";
}

function closeModal() {
  formModal.style.display = "none";
}

editButton.addEventListener("click", openModal);

closeButton.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  if (event.target === formModal) {
    closeModal();
  }
});
