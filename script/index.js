//Код открытия попапа по нажатию на кнопку edit- button
const popupEditButton = document.querySelector('.kusto__edit-button'); //нахожу в обработчике кнопку, с которой работаю
const overlay = document.querySelectorAll('.overlay-form'); //оверлэй, который буду менять
const popup = document.querySelectorAll('.popup'); //форма, которую буду менять
const editPopup = document.querySelector('.edit-popup');
const editOverlay = document.querySelector('.edit-overlay');
const buttonSave = document.querySelector('.form__submit');
const editPopupClose = document.querySelector('.edit-close');
const addPopupClose = document.querySelector('.add-close');
const titleElem = document.querySelector('.kusto__title');
const subtitleElem = document.querySelector('.kusto__subtitle');
const formElement = document.querySelector('.form');
// const formInput = formElement.querySelector('.form__input');
// console.log(formInput)
const inputName = document.querySelector('.form-field__input_name');
const inputInfo = document.querySelector('.form-field__input_info');
// const formError = formElement.querySelector(`.${formInput.id}-error`);
// console.log(formError)
const popupAddButton = document.querySelector('.kusto__add-button'); //нахожу в обработчике кнопку, с которой работаю
const addPopup = document.querySelector('.add-popup');
const addOverlay = document.querySelector('.add-overlay');
const createNewItemButton = document.querySelector('.item-create');
const inputImageName = document.querySelector('.form__input_image-name');
const inputImage = document.querySelector('.form__input_url');
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
    closePopup(editOverlay, editPopup)
}

function createCard(card) {
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
    const imagePopupClose = imagePopup.querySelector('.image-close');
    const imagePopupImage = imagePopup.querySelector('.popup__image');
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
        document.addEventListener('keydown', closePopupByEscape);
    });

    imagePopupClose.addEventListener('click', function () {
        closePopup(overlayItem, imagePopup)
        document.removeEventListener('keydown', closePopupByEscape);
    }); //связал команду клик и функцию замены классов по клику

    overlayItem.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('item-overlay')) {
            closePopup(evt.target);
        }
    }); //связал команду клик и функцию замены классов по клику

    return cardElement;
}


const showInputError = (formFieldElement, errorMessage) => {
    const formFieldErrorElement = formFieldElement.querySelector('.form-field__input-error');
    const formFieldInputElement = formFieldElement.querySelector('.form-field__input');
    formFieldInputElement.classList.add('form-field__input_type_error');
    formFieldErrorElement.textContent = errorMessage;
    formFieldErrorElement.classList.add('form-field__input-error_active');
};

const hideInputError = (formFieldElement) => {
    const formFieldErrorElement = formFieldElement.querySelector('.form-field__input-error');
    const formFieldInputElement = formFieldElement.querySelector('.form-field__input');
    formFieldInputElement.classList.remove('form-field__input_type_error');
    formFieldErrorElement.classList.remove('form-field__input-error_active');
    formFieldErrorElement.textContent = '';
};
// Функция, которая проверяет валидность поля
const checkValidation = (formFieldElement) => {
    const formFieldInputElement = formFieldElement.querySelector('.form-field__input');
    if (!formFieldInputElement.validity.valid) {
        // Если поле не проходит валидацию, покажем ошибку
        showInputError(formFieldElement, formFieldInputElement.validationMessage);
    } else {
        // Если проходит, скроем
        console.log(formFieldElement)
        hideInputError(formFieldElement);
    }
};

const setEventListeners = (formElement) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const formFieldList = Array.from(formElement.querySelectorAll('.form-field'));
    console.log(formFieldList)
    const buttonElement = formElement.querySelector('.form__submit');


    // toggleButtonState(formFieldList, buttonElement);

    // Обойдём все элементы полученной коллекции
    formFieldList.forEach((formFieldElement) => {
        // const formFieldInputElement = Array.from(formFieldElement.querySelectorAll('.form-field__input'));

        const formFieldInputElement = formFieldElement.querySelector('.form-field__input');

        // каждому полю добавим обработчик события input
        formFieldInputElement.addEventListener('input', () => {
            // Внутри колбэка вызовем isValid,
            // передав ей форму и проверяемый элемент
            checkValidation(formFieldElement, formFieldInputElement);
            // Вызовем toggleButtonState и передадим ей массив полей и кнопку
            toggleButtonState(formFieldList, buttonElement);
            console.log(formFieldElement)
        });
    });
};
const enableValidation = () => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll('.form'));

    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
        // Для каждой формы вызовем функцию setEventListeners,
        // передав ей элемент формы
        setEventListeners(formElement);
    });
};

// const formFieldInputElement = document.querySelectorAll('.form-field__input');

const hasInvalidInput = (formFieldList) => {
    console.log({ formFieldList })
    debugger;
    // проходим по этому массиву методом some
    return formFieldList.some((formFieldElement) => {
           const formFieldInputElement = formFieldElement.querySelector('.form-field__input');
        // Если поле не валидно, колбэк вернёт true
        // Обход массива прекратится и вся функция
        // hasInvalidInput вернёт true
        return !formFieldInputElement.validity.valid;

    });
};
console.log(hasInvalidInput)
// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (formFieldList, buttonElement) => {


    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(formFieldList)) {

        // сделай кнопку неактивной
        buttonElement.classList.add('form__submit_inactive');
        buttonElement.disabled = true;
    } else {
        // иначе сделай кнопку активной
        buttonElement.classList.remove('form__submit_inactive');
        buttonElement.disabled = false;
    }

};

popupEditButton.addEventListener('click', function () {
    openPopup(editOverlay, editPopup)
    document.addEventListener('keydown', closePopupByEscape);

}); //связал команду клик и функцию замены классов по клику
editPopupClose.addEventListener('click', function () {
    closePopup(editOverlay, editPopup)
    document.removeEventListener('keydown', closePopupByEscape);
}); //связал команду клик и функцию замены классов по клику

popupAddButton.addEventListener('click', function () {
    openPopup(addOverlay, addPopup)
    document.addEventListener('keydown', closePopupByEscape);
}); //связал команду клик и функцию замены классов по клику

addPopupClose.addEventListener('click', function () {
    closePopup(addOverlay, addPopup)
    document.removeEventListener('keydown', closePopupByEscape);
}); //связал команду клик и функцию замены классов по клику

buttonSave.addEventListener('click', save);

//функция добавление лайка и удаления карточек
cards.forEach(card => {
    const cardElement = createCard(card);
    containerGrid.appendChild(cardElement);
}
);


createNewItemButton.addEventListener('click', function create(evt) {
    evt.preventDefault();
    const cardElement = createCard({ name: inputImageName.value, imageUrl: inputImage.value });
    containerGrid.prepend(cardElement);
    closePopup(addOverlay, addPopup);
});

editOverlay.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('edit-overlay')) {
        closePopup(evt.target);
    }
}); //закрытие попапа 'редактировать профиль' по нажатию на оверлэй

addOverlay.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('add-overlay')) {
        closePopup(evt.target);
    }

}); //закрытие попапа 'редактировать профиль' по нажатию на оверлэй

const closePopupByEscape = (evt) => {
    if (evt.key === 'Escape') {
        const overlayOpen = document.querySelector('.overlay-form_open');
        const popupActive = document.querySelector('.popup_open');
        overlayOpen.classList.remove('overlay-form_open');
        popupActive.classList.remove('popup_open');
    }
}

// Вызовем функцию
enableValidation();


