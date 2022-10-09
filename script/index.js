//Код открытия попапа по нажатию на кнопку edit- button
let buttonElem = document.querySelector('.kusto__edit-button'); //нахожу в обработчике кнопку, с которой работаю
let overlay = document.querySelector('.overlay-form'); //оверлэй, который буду менять
let popup = document.querySelector('.edit-form'); //форма, которую буду менять
console.log(buttonElem)
console.log(overlay)
console.log(popup)
//создаю функцию, которая будет менять классы оверлэя и попапа
let onButtonClick = function () {
    overlay.classList.add('overlay-form_open'); //добавил оверлэй при открытом попап
    popup.classList.add('edit-form_open'); //добавил открытый попап

}
buttonElem.addEventListener('click', onButtonClick); //связал команду клик и функцию замены классов по клику

let buttonClose = document.querySelector('.edit-form__close');
console.log(buttonClose)
let onButtonClose = function () {
    overlay.classList.remove('overlay-form_open'); //добавил оверлэй при открытом попап
    popup.classList.remove('edit-form_open'); //добавил открытый попап

}
buttonClose.addEventListener('click', onButtonClose); //связал команду клик и функцию замены классов по клику


// Код сохранения информации в блок кусто профиль инфо
let buttonSave = document.querySelector('.edit-form__save');
let titleElem = document.querySelector('.kusto__title');
let subtitleElem = document.querySelector('.kusto__subtitle');
let inputName = document.querySelector('.edit-form__field_name');
let inputInfo = document.querySelector('.edit-form__field_info');
let onButtonSave = function (evt) {
    titleElem.textContent = inputName.value;
    subtitleElem.textContent = inputInfo.value;
    if (inputName.value !==0 & inputInfo.value !==0) {
        overlay.classList.remove('overlay-form_open'); //закрыть оверлэй
        popup.classList.remove('edit-form_open'); //закрыть попап
    }
    evt.preventDefault();

}
buttonSave.addEventListener('click', onButtonSave);


console.log(buttonSave)
