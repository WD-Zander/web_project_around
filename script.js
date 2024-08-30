// Selecciona el botón que abrirá el modal
let editButton = document.querySelector('.section__edit');
// Selecciona el formulario modal
let formModal = document.querySelector('.form');
// Selecciona el ícono de cierre del formulario
let closeButton = document.querySelector('.form__close');

// Función para abrir el modal
function openModal() {
    formModal.style.visibility = 'visible'; // Muestra el modal
}
visibility= 'visible';

// Función para cerrar el modal
function closeModal() {
  formModal.style.display = 'none'; // Oculta el modal
}

// Añade el evento 'click' al botón para abrir el modal
editButton.addEventListener('click', openModal);

// Añade el evento 'click' al ícono de cierre para cerrar el modal
closeButton.addEventListener('click', closeModal);

// Opcional: cierra el modal si el usuario hace clic fuera del formulario
window.addEventListener('click', function(event) {
  if (event.target === formModal) {
    closeModal();
  }
});

