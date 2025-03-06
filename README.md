# Proyecto de Galería de Imágenes Interactivo

Este proyecto es una aplicación web interactiva que permite a los usuarios visualizar, agregar, eliminar y dar "me gusta" a imágenes. También incluye funcionalidades para editar el perfil del usuario y actualizar su avatar.

## Características Principales

-   **Visualización de Imágenes**: Muestra una galería de imágenes cargadas desde un servidor.
-   **Agregar Nuevas Imágenes**: Los usuarios pueden agregar nuevas imágenes a la galería.
-   **Eliminar Imágenes**: Los usuarios pueden eliminar sus propias imágenes.
-   **Dar "Me Gusta" a Imágenes**: Los usuarios pueden dar "me gusta" a las imágenes.
-   **Edición de Perfil**: Los usuarios pueden editar su nombre y descripción de perfil.
-   **Actualización de Avatar**: Los usuarios pueden actualizar su imagen de avatar.
-   **Validación de Formularios**: Los formularios de edición de perfil, adición de imágenes y actualización de avatar tienen validación integrada.
-   **Confirmación de Eliminación**: Se muestra un popup de confirmación antes de eliminar una imagen.
-   **Interacción con API**: Utiliza una API para cargar y guardar datos del usuario y las imágenes.

## Estructura del Proyecto

El proyecto está estructurado en varios módulos para mantener el código organizado y modular:

-   **`Card.js`**: Clase para crear y manejar las tarjetas de imagen.
-   **`PopupWithImage.js`**: Clase para mostrar imágenes en un popup.
-   **`PopupWithForm.js`**: Clase para manejar formularios en popups.
-   **`PopupWithConfirmation.js`**: Clase para manejar popups de confirmación.
-   **`UserInfo.js`**: Clase para manejar la información del usuario.
-   **`Section.js`**: Clase para renderizar la lista de tarjetas.
-   **`FormValidator.js`**: Clase para validar formularios.
-   **`formConfig.js`**: Objeto de configuración para la validación de formularios.
-   **`Api.js`**: Clase para interactuar con la API del servidor.
-   **`index.js`**: Archivo principal que inicializa y conecta todos los componentes.

## Dependencias

-   Este proyecto asume que tienes una API configurada para manejar la información del usuario y las imágenes.
-   No se utilizan dependencias externas de librerías de terceros, pero si las usas, debes documentarlas aquí.

## Configuración

1.  **Configura la API**: Asegúrate de que la API esté configurada correctamente y que las URLs en `Api.js` sean correctas.
2.  **Configura `formConfig.js`**: Ajusta las clases de CSS y los mensajes de error en `formConfig.js` según tus necesidades.
3.  **Configura los Selectores**: Asegúrate que los selectores de los elementos HTML en el `index.js` coincidan con tu HTML.

## Funciones Principales

-   **`handleProfileFormSubmit(items)`**: Actualiza la información del perfil del usuario.
-   **`handleNewPlaceFormSubmit(items)`**: Agrega una nueva tarjeta de imagen a la galería.
-   **`handleAvatarFormSubmit(items)`**: Actualiza el avatar del usuario.
-   **`handleCardClick(name, link)`**: Abre un popup con la imagen en tamaño completo.
-   **`handleLikeClick(id)`**: Maneja la lógica de dar "me gusta" a una imagen.
-   **`handleDeleteClick(id, cardElement)`**: Abre un popup de confirmación para eliminar una imagen.

## Notas

-   Este proyecto utiliza programación orientada a objetos (POO) para organizar el código.
-   Las clases `PopupWithImage`, `PopupWithForm`, `PopupWithConfirmation`, `UserInfo`, `Section`, `FormValidator` y `Api` encapsulan la lógica y funcionalidad de cada componente.

## Autor

[Zander Garcia]

 