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
// const cards = document.querySelectorAll('.photo-grid__item');
const popupAddButton = document.querySelector('.kusto__add-button'); //нахожу в обработчике кнопку, с которой работаю
const addPopup = document.querySelector('.add-popup');
const addOverlay = document.querySelector('.add-overlay');
const cards = [
    {
        name: 'Архыз',
        imageUrl: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        imageUrl: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        imageUrl: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        imageUrl: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        imageUrl: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        imageUrl: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const containerGrid = document.querySelector('.photo-grid');
console.log(containerGrid)

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
    // const overlayItem = document.createElement('div');
    // overlayItem.classList.add('overlay-form');
    const cardElement = document.createElement('div');
    cardElement.classList.add('photo-grid__item');


    const cardImage = document.createElement('img');
    cardImage.src = card.imageUrl;
    cardImage.classList.add('photo-grid__image');
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('photo-grid__delete');
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('photo-grid__info');
    const cardTitle = document.createElement('p');
    cardTitle.textContent = card.name;
    cardTitle.classList.add('photo-grid__title');
    const overlayItem = document.querySelector('.item-overlay');
    const imagePopup = document.querySelector('.popup_image');
    const imagePopupTitle = imagePopup.querySelector('.popup__title');
    const imagePopupClose = document.querySelector('.image-close');


    const imagePopupImage = imagePopup.querySelector('.popup__image');
    containerGrid.appendChild(cardElement);
    cardElement.appendChild(cardImage);
    cardElement.appendChild(cardInfo);
    cardInfo.appendChild(cardTitle);


    console.log(buttonDelete)
    cardElement.appendChild(buttonDelete);
    const buttonLike = document.createElement('button');
    buttonLike.classList.add('photo-grid__like-button');
    const imageLike = document.createElement('img');
    imageLike.src = 'images/like.svg';
    imageLike.classList.add('photo-grid__like');
    cardInfo.appendChild(buttonLike);
    buttonLike.appendChild(imageLike);


    function deleteItem() {
        cardElement.remove();
    }

    function like() {
        imageLike.classList.toggle('photo-grid__like_black');
    }

    function openImageItem(overlay, imagePopup) {
        overlay.classList.add('overlay-form_open'); //добавил оверлэй при открытом попап
        imagePopup.classList.add('popup_image');
        imagePopupTitle.textContent = card.name;
        imagePopupImage.src = cardImage.src;

    }

    buttonLike.addEventListener('click', like);
    buttonDelete.addEventListener('click', deleteItem);
    cardImage.addEventListener('click', function () {
        openImageItem(overlayItem, imagePopup);
    });
    imagePopupClose.addEventListener('click', function () {
        closePopup(overlayItem, imagePopup)
    }); //связал команду клик и функцию замены классов по клику

});

const createNewItem = document.querySelector('.item-create');
const inputImageName = document.querySelector('.form__field_image-name');
const inputImage = document.querySelector('.form__field_url');
createNewItem.addEventListener('click', function create(evt) {
    evt.preventDefault();
    const cardElement = document.createElement('div');
    cardElement.classList.add('photo-grid__item');
    const cardImage = document.createElement('img');
    cardImage.src = inputImage.value;
    const overlayItem = document.querySelector('.item-overlay');
    const imagePopup = document.querySelector('.popup_image');
    const imagePopupTitle = imagePopup.querySelector('.popup__title');
    const imagePopupClose = document.querySelector('.image-close');


    const imagePopupImage = imagePopup.querySelector('.popup__image');
    cardImage.classList.add('photo-grid__image');
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('photo-grid__delete');
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('photo-grid__info');
    const cardTitle = document.createElement('p');
    cardTitle.textContent = inputImageName.value;
    cardTitle.classList.add('photo-grid__title');
    containerGrid.prepend(cardElement);
    cardElement.appendChild(cardImage);
    cardElement.appendChild(cardInfo);
    cardInfo.appendChild(cardTitle);
    cardElement.appendChild(buttonDelete);
    const buttonLike = document.createElement('button');
    buttonLike.classList.add('photo-grid__like-button');
    const imageLike = document.createElement('img');
    imageLike.src = 'images/like.svg';
    imageLike.classList.add('photo-grid__like');
    cardInfo.appendChild(buttonLike);
    buttonLike.appendChild(imageLike);
    addOverlay.classList.remove('overlay-form_open'); //закрыть оверлэй
    addPopup.classList.remove('popup_open'); //закрыть попап

    function deleteItem() {
        cardElement.remove();
    }
    function like() {
        imageLike.classList.toggle('photo-grid__like_black');
    }
    function openImageItem(overlay, imagePopup) {
        overlay.classList.add('overlay-form_open'); //добавил оверлэй при открытом попап
        imagePopup.classList.add('popup_image');
        imagePopupTitle.textContent = inputImageName.value;
        imagePopupImage.src = inputImage.value;

    }
    buttonDelete.addEventListener('click', deleteItem);
    buttonLike.addEventListener('click', like);
    cardImage.addEventListener('click', function () {
        openImageItem(overlayItem, imagePopup);
    });
    imagePopupClose.addEventListener('click', function () {
        closePopup(overlayItem, imagePopup)
    });


});

