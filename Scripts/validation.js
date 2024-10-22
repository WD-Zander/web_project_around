const showInputError = (formElement, inputElement, errorMessage, formConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(formConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(formConfig.errorClass);
};

const hideInputError = (formElement, inputElement, formConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(formConfig.inputErrorClass);
    errorElement.classList.remove(formConfig.errorClass);
    errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, formConfig) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, formConfig);
    } else {
        hideInputError(formElement, inputElement, formConfig);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement, formConfig) => {
    console.log(hasInvalidInput(inputList));
    if (hasInvalidInput(inputList)) {
        //buttonElement.classList.add("button_inactive");
        buttonElement.disabled = true;
    } else {
        buttonElement.disabled = false;
    }
};

const setEventListeners = (formElement, formConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(formConfig.inputSelector));
    const buttonElement = formElement.querySelector(formConfig.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, formConfig);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formElement, inputElement, formConfig);
            toggleButtonState(inputList, buttonElement, formConfig);
        });
    });
};

const enableValidation = (formConfig) => {
    const formList = Array.from(document.querySelectorAll(formConfig.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener("submit", function (evt) {
            evt.preventDefault();
        });



        setEventListeners(formElement, formConfig);

    });
};

enableValidation({
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".submit__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "form__input_has-error",
    errorClass: "popup__error_visible"

});

/*
enableValidation({
    formSelector: ".form__new-place",
    inputSelector: ".form__input",
    submitButtonSelector: ".submit__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "form__input_has-error",
    errorClass: "popup__error_visible"
});
*/