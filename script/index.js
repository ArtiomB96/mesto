//Код открытия попапа по нажатию на кнопку edit- button
const buttonElem = document.querySelector('.kusto__edit-button'); //нахожу в обработчике кнопку, с которой работаю
const overlay = document.querySelector('.overlay-form'); //оверлэй, который буду менять
const popup = document.querySelector('.edit-form'); //форма, которую буду менять
const buttonSave = document.querySelector('.edit-form__save');
const buttonClose = document.querySelector('.edit-form__close');
const titleElem = document.querySelector('.kusto__title');
const subtitleElem = document.querySelector('.kusto__subtitle');
const inputName = document.querySelector('.edit-form__field_name');
const inputInfo = document.querySelector('.edit-form__field_info');
const buttonLike = document.querySelector('.photo-grid__like-button');
const imageLike = document.querySelector('.photo-grid__like');

//создаю функцию, которая будет менять классы оверлэя и попапа
function onButtonClick() {
    overlay.classList.add('overlay-form_open'); //добавил оверлэй при открытом попап
    popup.classList.add('edit-form_open'); //добавил открытый попап

}
function onButtonClose() {
    overlay.classList.remove('overlay-form_open'); //добавил оверлэй при открытом попап
    popup.classList.remove('edit-form_open'); //добавил открытый попап

}
// Код сохранения информации в блок кусто профиль инфо

function onButtonSave(evt) {
    evt.preventDefault();
    titleElem.textContent = inputName.value;
    subtitleElem.textContent = inputInfo.value;
    overlay.classList.remove('overlay-form_open'); //закрыть оверлэй
    popup.classList.remove('edit-form_open'); //закрыть попап


}
//Код нажатия на кнопку лайка

function onButtonLike(buttonLike) {
    imageLike.classList.toggle('photo-grid__like_black');
}

buttonElem.addEventListener('click', onButtonClick); //связал команду клик и функцию замены классов по клику
buttonClose.addEventListener('click', onButtonClose); //связал команду клик и функцию замены классов по клику
buttonSave.addEventListener('click', onButtonSave);
buttonLike.addEventListener('click', onButtonLike);
console.log(buttonLike)