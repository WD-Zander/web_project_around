# Tripleten web_project_around


Este proyecto forma parte del Sprint 7 de Tripleten, donde trabajamos con **JavaScript (JS)**, **CSS** y **HTML** para implementar una funcionalidad interactiva en una página web.

## Descripción

El objetivo del proyecto fue crear un formulario interactivo que permita a los usuarios editar su nombre y una breve descripción sobre ellos mismos. La información actualizada se muestra dinámicamente en la página, y el formulario se puede abrir y cerrar mediante un modal.

## Funcionalidades Principales

- **Edición de Perfil:**
  - Los usuarios pueden modificar su nombre y la sección "Acerca de mí" utilizando un formulario.
  - Los cambios se reflejan inmediatamente en la página después de enviar el formulario.

- **Modal para el Formulario:**
  - El formulario se presenta dentro de un modal que se puede abrir y cerrar.
  - El modal se abre al hacer clic en el botón de editar.
  - El modal se cierra al hacer clic en el botón de cerrar o fuera del área del modal.

## Tecnologías Utilizadas

- **HTML:** Estructura básica del documento y elementos del formulario.
- **CSS:** Estilizado del formulario y el modal para mejorar la experiencia de usuario.
- **JavaScript:** Manejo de eventos, manipulación del DOM y control de la visibilidad del modal.

## Código Principal

```javascript
let editButton = document.querySelector(".section__edit");
let formModal = document.querySelector(".form");
let closeButton = document.querySelector(".form__close");
let form = document.querySelector('.form');
let inputName = document.querySelector('.form__input');
let h1 = document.querySelector('.section__profile-info');
let inputAbout = document.querySelector('.form__input-about');
let h2 = document.querySelector('.section__profile-tag');
let buttonColor = document.querySelector('.submit__button')

function openModal() {
  formModal.style.display = "flex";
  inputName.value = h1.textContent;
  inputAbout.value = h2.textContent;
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


inputName.addEventListener('input', changeButtonColor);
inputAbout.addEventListener('input', changeButtonColor);

## Metadatos del Proyecto

```html
<meta name="keywords" content="responsive, curso, mediaquerys, git page" />
<meta name="description" content="Proyecto 5 Tripleten" />
```

## Lo que Aprendimos

Durante este sprint, aprendimos cómo:

1. Manipular el DOM usando JavaScript para actualizar el contenido de la página en tiempo real.
2. Manejar formularios y eventos de manera eficiente.
3. Implementar un modal para mejorar la experiencia del usuario.
4. Trabajar con visibilidad y animaciones en CSS para crear interfaces más atractivas.

## Enlace al Proyecto

Puedes ver el proyecto en acción visitando el siguiente enlace: [Proyecto Sprint 7 - Tripleten](https://wd-zander.github.io/web_project_around/)

---

Este proyecto es parte del plan de estudios de Tripleten y muestra cómo combinar HTML, CSS y JavaScript para crear aplicaciones web interactivas y funcionales.
