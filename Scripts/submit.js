
let form = document.querySelector('.form');
let inputName = document.querySelector('.form__input');
let h1 = document.querySelector('.section__profile-info');



let InputaboutMe = document.querySelector('.form__input-about')
let h2= document.querySelector('.section__profile-tag')




form.addEventListener('submit', function (event) {
    event.preventDefault();
    let getName = inputName.value;


    let aboutMe = InputaboutMe.value;
    h1.textContent = getName;


    h2.textContent = aboutMe ;

    closeModal();
});
