let editButton = document.querySelector(".section__edit");

let formModal = document.querySelector(".form");

let closeButton = document.querySelector(".form__close");

function openModal() {
  formModal.style.visibility = "visible";
}

function closeModal() {
  formModal.style.visibility = "hidden";
}

editButton.addEventListener("click", openModal);

closeButton.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  if (event.target === formModal) {
    closeModal();
  }
});
