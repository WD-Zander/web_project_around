


let editButton = document.querySelector(".section__edit");
let formModal = document.querySelector(".form");
let closeButton = document.querySelector(".form__close");
let form = document.querySelector('.form');
let inputName = document.querySelector('.form__input');
let h1 = document.querySelector('.section__profile-info');
let inputAbout = document.querySelector('.form__input-about');
let h2 = document.querySelector('.section__profile-tag');

function openModal() {
  formModal.style.display = "flex";
  inputName.value=h1.textContent
  inputAbout.value=h2.textContent


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

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let getName = inputName.value;
  let aboutMe = inputAbout.value;
  h1.textContent = getName;
  h2.textContent = aboutMe;

  closeModal();
});


