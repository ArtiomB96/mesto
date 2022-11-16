//Код открытия попапа по нажатию на кнопку edit- button
const popupEditButton = document.querySelector('.kusto__edit-button'); //нахожу в обработчике кнопку, с которой работаю
const overlay = document.querySelectorAll('.overlay-form'); //оверлэй, который буду менять
const popup = document.querySelectorAll('.popup'); //форма, которую буду менять
const editPopup = document.querySelector('.edit-popup');
const editOverlay = document.querySelector('.edit-overlay');
const buttonSave = document.querySelector('.form__save');
const editPopupClose = document.querySelector('.edit-close');
const addPopupClose = document.querySelector('.add-close');
const titleElem = document.querySelector('.kusto__title');
const subtitleElem = document.querySelector('.kusto__subtitle');
const inputName = document.querySelector('.form__field_name');
const inputInfo = document.querySelector('.form__field_info');
const cards = document.querySelectorAll('.photo-grid__item');
const popupAddButton = document.querySelector('.kusto__add-button'); //нахожу в обработчике кнопку, с которой работаю
const addPopup = document.querySelector('.add-popup');
const addOverlay = document.querySelector('.add-overlay');

//создаю функцию, которая будет менять классы оверлэя и попапа
function openPopup(overlay, popup) {
    overlay.classList.add('overlay-form_open'); //добавил оверлэй при открытом попап
    popup.classList.add('popup_open'); //добавил открытый попап

}
function closePopup(overlay, popup) {
    overlay.classList.remove('overlay-form_open');
    popup.classList.remove('popup_open');

}
// Код сохранения информации в блок кусто профиль инфо

function save(evt) {
    evt.preventDefault();
    titleElem.textContent = inputName.value;
    subtitleElem.textContent = inputInfo.value;
    editOverlay.classList.remove('overlay-form_open'); //закрыть оверлэй
    editPopup.classList.remove('popup_open'); //закрыть попап


}



popupEditButton.addEventListener('click', function () {
    openPopup(editOverlay, editPopup)
}); //связал команду клик и функцию замены классов по клику
editPopupClose.addEventListener('click', function () {
    closePopup(editOverlay, editPopup)
}); //связал команду клик и функцию замены классов по клику

popupAddButton.addEventListener('click', function () {
    openPopup(addOverlay, addPopup)
}); //связал команду клик и функцию замены классов по клику
addPopupClose.addEventListener('click', function () {
    closePopup(addOverlay, addPopup)
}); //связал команду клик и функцию замены классов по клику
buttonSave.addEventListener('click', save);
// buttonLike.addEventListener('click', like);

//функция добавление лайка и удаления карточек
cards.forEach(card => {
    const buttonLike = card.querySelector('.photo-grid__like-button')
    const imageLike = card.querySelector('.photo-grid__like')
    const buttonDelete = card.querySelector('.photo-grid__delete')
    function like() {
        imageLike.classList.toggle('photo-grid__like_black');
    }
    function deleteItem() {
        card.remove();
    }
    buttonLike.addEventListener('click', like);
    buttonDelete.addEventListener('click', deleteItem);
});